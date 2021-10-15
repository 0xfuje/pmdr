import React, {useContext, useReducer, useState} from 'react';
import { StyledPopup } from './styled/StyledPopup';
import Icon from './Icon';
import Button from './buttons/Button';
import ToggleSwitch from './ToggleSwitch';
import { TimerContext } from '../context/timer.context';

function Popup() {
    const { timer, timerDispatch } = useContext(TimerContext);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    // Input states
    const [inputs, setInputs] = useState({
        pomodoro: timer.pomodoroLength,
        shortBreak: timer.shortBreakLength,
        longBreak: timer.longBreakLength,
        longBreakInterval: timer.longBreakInterval
    });
    const handleInputChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    };


    const handleTogglePomodoro = () => {
        timerDispatch({ type: 'AUTO-START-POMODOROS'});
        forceUpdate();
    }
    const handleToggleBreak = () => {
        timerDispatch({ type: 'AUTO-START-BREAKS'});
        forceUpdate();
    }
    const handleSaveClick = (inputs) => {
        timerDispatch({ type: 'SAVE-SETTINGS', payload: { inputs : inputs }});
        forceUpdate();
    }
    const handleCross = () => {
        timerDispatch({ type: 'CLOSE-SETTINGS'});
        forceUpdate();
    }
    
    return (
        <StyledPopup className='Popup' display={timer.isSettingsDisplayed}>
            <div className="Popup-window">
                <div className="Popup-head">
                    <h2 className="Popup-title">Timer Settings</h2>
                    <Icon type={'cross'} onClick={handleCross}/>
                </div>
                <div className="Popup-body">
                    <div className="Popup-section Popup-section-time">
                        <h3 className="Popup-smTitle">Time (in minutes)</h3>
                        <div className="Popup-section-time-flex">
                            <div className="Popup-section-time-pomodoro">
                                <h4 className='Popup-tinyTitle'>Pomodoro</h4>
                                <input type='number' value={inputs.pomodoro} name='pomodoro' onChange={handleInputChange} min='0' max='200' className='Popup-numInput'/>
                            </div>
                            <div className="Popup-section-time-shortBreak">
                                <h4 className='Popup-tinyTitle'>Short Break</h4>
                                <input type='number' value={inputs.shortBreak} name='shortBreak' onChange={handleInputChange} min='0' max='100' className='Popup-numInput'/>
                            </div>
                            <div className="Popup-section-time-longBreak">
                                <h4 className='Popup-tinyTitle'>Long Break</h4>
                                <input type='number' value={inputs.longBreak} name='longBreak' onChange={handleInputChange} min='0' max='100' className='Popup-numInput'/>
                            </div>
                        </div>
                    </div>
                    <div className="Popup-section Popup-section-autoBreaks">
                        <h3 className="Popup-smTitle">Auto start Breaks?</h3>
                        <ToggleSwitch isChecked={timer.autoStartBreak} onClick={handleToggleBreak}/>
                    </div>
                    <div className="Popup-section Popup-section-autoPomodoros">
                        <h3 className="Popup-smTitle">Auto start Pomodoros?</h3>
                        <ToggleSwitch isChecked={timer.autoStartPomodoro} onClick={handleTogglePomodoro}/>
                    </div>
                    <div className="Popup-section Popup-section-longBreakInterval">
                        <h3 className="Popup-smTitle">Long Break Interval</h3>
                        <input type='number' value={inputs.longBreakInterval} name='longBreakInterval' onChange={handleInputChange} min='0' max='20' className='Popup-numInput'/>
                    </div>
                    <div className="Popup-section Popup-section-alarmSound">
                        <h3 className="Popup-smTitle">Alarm Sound</h3>
                    </div>
                </div>
                <div className="Popup-button">
                    <Button type='dark' text='Save' onClick={() => handleSaveClick(inputs)}/>
                </div>
            </div>
        </StyledPopup>
    )
}

export default Popup;
