import React, { useContext, useReducer, useEffect } from 'react';
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
    let clockInterval;

    const togglePomodoro = () => {
        timerDispatch({ type: 'AUTO-START-POMODOROS'});
    }
    const toggleBreak = () => {
        timerDispatch({ type: 'AUTO-START-BREAKS'});
    }
    const save = (inputs) => {
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs }});
    }
    const close = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS'});
    }

    const handleButtonClick = (st) => {
        timerDispatch({ type: 'CHANGE-ACTIVE-STATE', payload: { active: st.name }})
        setTheme(changeTheme(st.color));
    }
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS'});
    }
    const handleStartClick = () => {
        clearInterval(clockInterval);
        if (!timer.isCounting) {
            clearInterval(clockInterval);
            clockInterval = setInterval(() => {
            const newTime = tick(endDate);
            timerDispatch({ type: 'START-TIMER', payload: { tick: newTime }});
            }, 1000);
        }
        if (timer.isCounting) {
            clearInterval(clockInterval);
            timerDispatch({ type: 'STOP-TIMER'});
        };
    }
    const displayButtons = timer.states.map((st) => {
        if (st.name === timer.activeState)
            return <Button
                type='active'
                text={st.name}
                onClick={() => handleButtonClick(st)}/>
        return <Button
            type='normal'
            text={st.name}
            onClick={() => handleButtonClick(st)}/>
    });

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
    
    
    const endDate = new Date().getTime() + msConverter(timer.pomodoroLength);

    
    
    
    const tick = (endMS) => {
        const currentMS = new Date().getTime();
        const timeLeft = dateConverter(endMS - currentMS);
        return timeLeft;
    }

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
                {timer.isCounting ? <FinishButton /> : ''}
            </div>
            <div className="Timer-settings">
                <Button type='light' text='Settings' onClick={handleSettingsClick}/>
            </div>
        </StyledTimer>
    )
}

export default Timer
