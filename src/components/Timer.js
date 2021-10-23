import React, { useContext, useEffect, useState } from 'react';
import { StyledTimer } from "./styled/StyledTimer";

import Clock from './Clock';
import Popup from './Popup';

import Button from './buttons/Button';
import GiantButton from './buttons/GiantButton';
import FinishButton from './buttons/FinishButton';

import birdChirp from '../audios/european-robin.mp3';
import buttonClick from '../audios/button-click.mp3';

import { TimerContext } from '../context/timer.context';
import { TasksContext } from '../context/tasks.context';
import { MyThemeContext } from '../Theme';

function Timer() {
    const { theme, setTheme, changeTheme } = useContext(MyThemeContext);
    const { timer, timerDispatch } = useContext(TimerContext);
    const { tasks, taskDispatch } = useContext(TasksContext);
    const [intervalID, setIntervalID] = useState();

    // Passed down functions
    const togglePomodoro = () => {
        timerDispatch({ type: 'AUTO-START-POMODOROS'});
    }
    const toggleBreak = () => {
        timerDispatch({ type: 'AUTO-START-BREAKS' });
    }
    const save = (inputs) => {
        clearInterval(intervalID);
        const timeLeft = () => {
            if (timer.active.name === 'Pomodoro') return inputs.pomodoro;
            if (timer.active.name === 'Break') return inputs.shortBreak;
            if (timer.active.name === 'Long Break') return inputs.longBreak;
        }
        
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs, timeLeft: timeLeft() }});
    }
    const close = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS' });
    }

    // Handlers
    const handleButtonClick = (st) => {
        if (timer.isCounting) {
            if (!window.confirm('Timer is running, are you sure about switching?'))  return;
            changeActive(st);
        }
        changeActive(st);
        
    }
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS' });
    }
    const handleStartClick = () => {
        playButtonClick();
        startCount();
    }
    const handleFinishClick = () => {
        finishCount();
    }

    // Display variables
    const displayButtons = timer.states.map((st) => {
        if (st.name === timer.active.name)
            return <Button
                type='active'
                text={st.name}
                key={st.id}
                onClick={() => handleButtonClick(st)}/>
        return <Button
            type='normal'
            text={st.name}
            key={st.id}
            onClick={() => handleButtonClick(st)}/>
    });

    // Helper functions
    // Theme color change function helper
    const changeColor = () => {
        if (theme.colors.main.active === 'blue') setTheme(changeTheme('red'));
        if (theme.colors.main.active === 'red') setTheme(changeTheme('blue'));
    }
    
    // Change active helper on button helper
    const changeActive = (st) => {
        clearInterval(intervalID);
        timerDispatch({ type: 'CHANGE-ACTIVE-STATE', 
        payload:
            { 
                states: changeState(st)[0],
                timeLeft: st.length.toString().padStart(2, 0) + ':00',
                active: changeState(st)[1],
            }
        })
        setTheme(changeTheme(st.color));
    }
    
    //

    // State change helper
    const changeState = (st) => {
        timer.states.map((s) => s.isActive = false);
        const stateWithoutActive = timer.states.filter((s) => s.id !== st.id);
        const active = timer.states.filter((s) => s.id === st.id)[0];
        const states = [...stateWithoutActive, {...active, isActive: true}].sort((a, b) => a.pos - b.pos);
        return [states, active];
    }


    // Counter functionality
    const msConverter = (min = 0, sec = 0) => {
        const milliseconds = (min* 1000 * 60) + (sec * 1000);
        return milliseconds;
    }

    const dateConverter = (dateToConvert) => {
        const date = new Date(dateToConvert);
        const seconds = Math.floor((date / 1000) % 60);
        const minutes = Math.floor((date / 1000 / 60) % 60);
        return (`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }

    const tick = (endMS) => {
        const currentMS = new Date().getTime();
        const timeLeft = endMS - currentMS;
        return timeLeft;
    }

    const tickPercent = (current) => {
        const start = msConverter(timer.active.length);
        const percent = (1 - (current / start)) * 100;
        return percent.toFixed(2);
    }

    const startCount = () => {
        clearInterval(intervalID);
        const currentTime = new Date().getTime();
        

        // DONT REPEAT YOURSELF!! FIX LATER!
        if (!timer.isCounting && timer.isStartedBefore) {
            timerDispatch({ type: 'RESUME-TIMER' });
            const clockID = setInterval(() => {
                const endDate = currentTime + timer.timeLeftInMs;
                const percentage = tickPercent(tick(endDate));
                if (tick(endDate) < 1000) {
                    finishCount();
                    playBirdChirp();
                    return clearInterval(clockID)};
                timerDispatch({ type: 'TICK', payload: { time: dateConverter(tick(endDate)), timeInMs: tick(endDate), percentage: percentage }});
            }, 950);
            setIntervalID(clockID);
        }
        if (!timer.isCounting && !timer.isStartedBefore) {
            timerDispatch({ type: 'START-TIMER' });
            const clockID = setInterval(() => {
                const endDate = currentTime + msConverter(timer.active.length);
                const percentage = tickPercent(tick(endDate));
                if (tick(endDate) < 1000) {
                    finishCount();
                    playBirdChirp();
                    return clearInterval(clockID)
                };
                timerDispatch({ type: 'TICK', payload: { time: dateConverter(tick(endDate)), timeInMs: tick(endDate), percentage: percentage }});
            }, 950);
            setIntervalID(clockID);
        }
        if (timer.isCounting) {
            clearInterval(intervalID);
            timerDispatch({ type: 'STOP-TIMER'});
        };
    }
        


    const finishCount = () => {
        clearInterval(intervalID);
        const pomodoro = timer.states.filter((st) => st.name === 'Pomodoro')[0];
        const shortBreak = timer.states.filter((st) => st.name === 'Break')[0];
        const longBreak = timer.states.filter((st) => st.name === 'Long Break')[0];

        
        const changeActive = () => {
            if (timer.active.name === 'Pomodoro') {
                if (timer.longBreakInterval - 1 > timer.currentInterval) {
                    return { 
                        interval: timer.currentInterval + 1,
                        states: changeState(shortBreak)[0],
                        active: changeState(shortBreak)[1],
                        timeLeft: shortBreak.length + ':00',
                    }
                }
                else {
                    return {
                        interval: 0,
                        states: changeState(longBreak)[0],
                        active: changeState(longBreak)[1],
                        timeLeft: longBreak.length + ':00',
                    }
                }
            }
            else {
                return {
                    interval: timer.currentInterval,
                    states: changeState(pomodoro)[0],
                    active: changeState(pomodoro)[1],
                    timeLeft: pomodoro.length + ':00'
                }
            }
        }
        const {interval, states, active, timeLeft} = changeActive();
        console.log(interval, states, active, timeLeft);

        timerDispatch
            ({  
                type: 'FINISH-TIMER',
                payload: {
                    interval: interval,
                    states: states,
                    active: active,
                    timeLeft: timeLeft,
                    percentage: 0,
                }
            });

        const activeTask = tasks.filter((t) => t.isActive === true)[0];
        if (timer.active.name === 'Pomodoro' && tasks.includes(activeTask)) {
            taskDispatch({ 
                type: 'ADD-TO-DONE',
                payload: {
                    id: activeTask.id,
                    done: activeTask.done + 1
                }
            });
        }
        changeColor();
    }

    // Working with audio
    // this function plays the sound provided by ctx and audio for specified length
    const playSound = (ctx, audio, length = 0) => {
        const playSound = ctx.createBufferSource();
        playSound.buffer = audio;
        playSound.connect(ctx.destination);
        playSound.start(0);
        if (length !== 0) playSound.stop(ctx.currentTime + length);
    }

    // Fetching birdchirp sound
    const birdChirpCtx = new AudioContext();
    let birdChirpAudio;
    fetch(birdChirp)
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => birdChirpCtx.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {birdChirpAudio = decodedAudio})
        .catch(err => console.error('ERROR: ' + err));

   

    // Fetching button click sound
    const buttonClickCtx = new AudioContext();
    let buttonClickAudio;
    fetch(buttonClick)
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => buttonClickCtx.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {buttonClickAudio = decodedAudio})
        .catch(err => console.error('ERROR: ' + err));

    const playBirdChirp = () => playSound(birdChirpCtx, birdChirpAudio, 3);
    const playButtonClick = () => playSound(buttonClickCtx, buttonClickAudio);



    // Web Title
    window.document.title = `${timer.timeLeft} - pmdr`;
    return (
        <StyledTimer className='Timer'>
            <Popup 
                togglePomodoro={togglePomodoro}
                toggleBreak={toggleBreak}
                save={save}
                close={close}
            />
            <div className="Timer-buttons">
                {displayButtons}
            </div>
            <Clock time={timer.timeLeft} />
            <div className="Timer-controll">
                <GiantButton text={timer.isCounting ? 'stop' : 'start'} onClick={handleStartClick}/>
                {timer.isCounting ? <FinishButton onClick={handleFinishClick} /> : ''}
            </div>
            <div className="Timer-settings">
                <Button type='light' text='Settings' onClick={handleSettingsClick}/>
            </div>
        </StyledTimer>
    )
}

export default Timer;
