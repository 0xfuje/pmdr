import React, { useContext, useState } from 'react';
import { StyledTimer } from "./styled/StyledTimer";

import Clock from './Clock';
import Popup from './Popup';

import Button from './buttons/Button';
import GiantButton from './buttons/GiantButton';
import FinishButton from './buttons/FinishButton';

import birdChirp from '../audios/european-robin.mp3';

import { TimerContext } from '../context/timer.context';
import { MyThemeContext } from '../Theme';

function Timer() {
    const { theme, setTheme, changeTheme } = useContext(MyThemeContext);
    const { timer, timerDispatch } = useContext(TimerContext);
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
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs }});
    }
    const close = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS' });
    }

    // Handlers
    const handleButtonClick = (st) => {
        timerDispatch({ type: 'CHANGE-ACTIVE-STATE', payload: { newStates: changeState(st) }})
        setTheme(changeTheme(st.color));
    }
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS' });
    }
    const handleStartClick = () => {
        startCount();
    }
    const handleFinishClick = () => {
        finishCount();
    }


    // Display variables
    const displayButtons = timer.states.map((st) => {
        if (st.isActive === true)
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


    // State Change helper function
    const changeState = (st) => {
        timer.states.map((s) => s.isActive = false);
        const stateWithoutActive = timer.states.filter((s) => s.id !== st.id);
        const active = timer.states.filter((s) => s.id === st.id)[0];
        const newStates = [...stateWithoutActive, {...active, isActive: true}].sort((a, b) => a.pos - b.pos);
        return newStates;
    }
   

    // Counter functionality
    let currentActive =  timer.states.filter((st) => st.isActive === true)[0];

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

    const startCount = () => {
        clearInterval(intervalID);
        const currentTime = new Date().getTime();
        if (!timer.isCounting && timer.isStartedBefore) {
            clearInterval(intervalID);
            timerDispatch({ type: 'RESUME-TIMER' });
            const clockID = setInterval(() => {
                const endDate = currentTime + timer.timeLeftInMs;
                timerDispatch({ type: 'TICK', payload: { time: dateConverter(tick(endDate)), timeInMs: tick(endDate) }});
            }, 1000);
            setIntervalID(clockID);
        }
        if (!timer.isCounting && !timer.isStartedBefore) {
            clearInterval(intervalID);
            timerDispatch({ type: 'START-TIMER' });
            const currentLength = currentActive.length;
            const clockID = setInterval(() => {
                const endDate = currentTime + msConverter(currentLength) + 1000;
                timerDispatch({ type: 'TICK', payload: { time: dateConverter(tick(endDate)), timeInMs: tick(endDate) }});
            }, 1000);
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
            if (currentActive.name === 'Pomodoro') {
                if (timer.longBreakInterval - 1 > timer.currentInterval) {
                    return { 
                        interval: timer.currentInterval + 1,
                        states: changeState(shortBreak),
                        timeLeft: shortBreak.length + ':00',
                    }
                }
                else {
                    return {
                        interval: 0,
                        states: changeState(longBreak),
                        timeLeft: longBreak.length + ':00',
                    }
                }
            }
            else {
                return {
                    interval: timer.currentInterval,
                    states: changeState(pomodoro),
                    timeLeft: pomodoro.length + ':00'
                }
            }
        }
        const {interval, states, timeLeft} = changeActive();
        console.log(interval, states, timeLeft);

        timerDispatch
            ({  
                type: 'FINISH-TIMER',
                payload: {
                    interval: interval,
                    states: states,
                    timeLeft: timeLeft
                }
            });
        if (theme.colors.main.active === 'blue') setTheme(changeTheme('red'));
        if (theme.colors.main.active === 'red') setTheme(changeTheme('blue'));
        playBirdChirp();
    }
    

    // Working with audio
    const audioCtx = new AudioContext();
    let audio;
    fetch(birdChirp)
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {audio = decodedAudio})
        .catch(err => console.error('ERROR: ' + err));

    const playBirdChirp = () => {
        const playSound = audioCtx.createBufferSource();
        playSound.buffer = audio;
        playSound.connect(audioCtx.destination);
        playSound.start(0);
        playSound.stop(audioCtx.currentTime + 3);
    }


    // Web Title
    window.document.title = `${timer.timeLeft} - ${timer.activeState}`;
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
