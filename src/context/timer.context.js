import React, {createContext, useReducer} from 'react';
import timerReducer from '../reducers/timer.reducer';
import { nanoid } from 'nanoid';

const defTimer = {
    longBreakInterval: 4,
    currentInterval: 0,
    autoStartBreak: true,
    autoStartPomodoro: false,
    alarmSound: 'bird-chirp',
    isSettingsDisplayed: false,
    isCounting: false,
    isStartedBefore: false,
    timeLeft: '25:00',
    timeLeftInMs: '',
    timeFullInMs: '',
    timePassedPercent: '',
    active: {name: 'Pomodoro', pos: 0,  length: 25, color: 'red', id: nanoid(), isActive: true},
    states: [
        {name: 'Pomodoro', pos: 0,  length: 25, color: 'red', id: nanoid(), isActive: true},
        {name: 'Break', pos: 1,  length: 5, color: 'blue', id: nanoid(), isActive: false},
        {name: 'Long Break', pos: 2,  length: 25, color: 'blue', id: nanoid(), isActive: false} 
    ]
}



export const TimerContext = createContext();

export function TimerProvider(props) {
    const [timer, timerDispatch] = useReducer(timerReducer, defTimer)
    return (
        <TimerContext.Provider value={{timer, timerDispatch}}>
            {props.children}
        </TimerContext.Provider>
    );
}
