import React, { useContext, useReducer } from 'react';
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
    const [_, forceUpdate] = useReducer((x) => x+1, 0);

    const togglePomodoro = () => {
        timerDispatch({ type: 'AUTO-START-POMODOROS'});
        forceUpdate();
    }
    const toggleBreak = () => {
        timerDispatch({ type: 'AUTO-START-BREAKS'});
        forceUpdate();
    }
    const save = (inputs) => {
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs }});
        forceUpdate();
    }
    const close = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS'});
        forceUpdate();
    }

    const handleButtonClick = (st) => {
        timerDispatch({ type: 'CHANGE-ACTIVE-STATE', payload: { active: st.name }})
        setTheme(changeTheme(st.color));
    }
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS'});
        forceUpdate();
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
                <GiantButton text={timer.isCounting ? 'stop' : 'start'} />
                {timer.isCounting ? <FinishButton /> : ''}
            </div>
            <div className="Timer-settings">
                <Button type='light' text='Settings' onClick={handleSettingsClick}/>
            </div>
        </StyledTimer>
    )
}

export default Timer
