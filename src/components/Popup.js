import React from 'react';
import { StyledPopup } from './styled/StyledPopup';
import Icon from './Icon';
import Button from './buttons/Button';

function Popup() {
    return (
        <StyledPopup className='Popup'>
            <div className="Popup-window">
                <div className="Popup-head">
                    <h2 className="Popup-title">Timer Settings</h2>
                    <Icon type={'cross'} />
                </div>
                <div className="Popup-body">
                    <div className="Popup-section Popup-section-time">
                        <h3 className="Popup-smTitle">Time (in minutes)</h3>
                        <div className="Popup-section-time-flex">
                            <div className="Popup-section-time-pomodoro">
                                <h4 className='Popup-tinyTitle'>Pomodoro</h4>
                                <input type='number' min='0' max='20' className='Popup-numInput'/>
                            </div>
                            <div className="Popup-section-time-shortBreak"></div>
                            <div className="Popup-section-time-longBreak"></div>
                        </div>
                    </div>
                    <div className="Popup-section Popup-section-autoBreaks">
                        <h3 className="Popup-smTitle">Auto start Breaks?</h3>
                    </div>
                    <div className="Popup-section Popup-section-autoPomodoros">
                        <h3 className="Popup-smTitle">Auto start Pomodoros?</h3>
                    </div>
                    <div className="Popup-section Popup-section-longBreakInterval">
                        <h3 className="Popup-smTitle">Long Break Interval</h3>
                    </div>
                    <div className="Popup-section Popup-section-alarmSound">
                        <h3 className="Popup-smTitle">Alarm Sound</h3>
                    </div>
                </div>
                <div className="Popup-button">
                    <Button type='dark' text='Save'/>
                </div>
            </div>
        </StyledPopup>
    )
}

export default Popup;
