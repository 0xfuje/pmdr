import React, {createContext, useReducer} from 'react';
import timerReducer from '../reducers/timer.reducer';
import { nanoid } from 'nanoid';

const defTimer = {
    pomodoroLength: 30,
    shortBreakLength: 10,
    longBreakLength: 30,
    longBreakInterval: 4,
    autoStartBreak: true,
    autoStartPomodoro: false,
    alarmSound: 'metal',
    isSettingsDisplayed: false,
    isCounting: false,
    isStartedBefore: false,
    activeState: 'Pomodoro',
    timeLeft: '30:00',
    timeLeftInMs: '',
    states: [
        {name: 'Pomodoro', color: 'red', id: nanoid()},
        {name: 'Break', color: 'blue', id: nanoid()},
        {name: 'Long Break', color: 'blue', id: nanoid()} 
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
