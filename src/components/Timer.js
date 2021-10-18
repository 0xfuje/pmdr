import React, { useContext, useState } from 'react';
import { StyledTimer } from "./styled/StyledTimer";

import Clock from './Clock';
import Popup from './Popup';

import Button from './buttons/Button';
import GiantButton from './buttons/GiantButton';
import FinishButton from './buttons/FinishButton';


import { TimerContext } from '../context/timer.context';
import { MyThemeContext } from '../Theme';

function Timer() {
    const { setTheme, changeTheme } = useContext(MyThemeContext);
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
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs }});
    }
    const close = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS' });
    }

    // Handlers
    const handleButtonClick = (st) => {
        timerDispatch({ type: 'CHANGE-ACTIVE-STATE', payload: { active: st.name }})
        setTheme(changeTheme(st.color));
    }
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS' });
    }
    const handleStartClick = () => {
        startCount();
    }
    const handleFinishClick = () => {
        clearInterval(intervalID);
        timerDispatch({ type: 'FINISH-TIMER' });
    }

    

    // Display variables
    const displayButtons = timer.states.map((st) => {
        if (st.name === timer.activeState)
            return <Button
                type='active'
                text={st.name}
                key={st.id}
                onClick={() => handleButtonClick(st)}/>
        return <Button
            type='normal'
            text={st.name}
            kye={st.id}
            onClick={() => handleButtonClick(st)}/>
    });


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
            const clockID = setInterval(() => {
                const endDate = currentTime + msConverter(timer.pomodoroLength) + 1000;
                timerDispatch({ type: 'TICK', payload: { time: dateConverter(tick(endDate)), timeInMs: tick(endDate) }});
            }, 1000);
            setIntervalID(clockID);
        }
        if (timer.isCounting) {
            clearInterval(intervalID);
            timerDispatch({ type: 'STOP-TIMER'});
        };
    }

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

export default Timer
