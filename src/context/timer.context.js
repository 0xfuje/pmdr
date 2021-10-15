import React, {createContext, useReducer} from 'react';
import timerReducer from '../reducers/timer.reducer';

const defTimer = {
    pomodoroLength: 30,
    shortBreakLength: 10,
    longBreakLength: 30,
    autoStartBreak: true,
    autoStartPomodoro: false,
    longBreakInterval: 4,
    alarmSound: 'metal',
    isSettingsDisplayed: true,
    isCounting: false,
    activeState: 'Pomodoro',
    timeLeft: '30:00',
    states: [
        {name: 'Pomodoro', color: 'red'},
        {name: 'Break', color: 'blue'},
        {name: 'Long Break', color: 'blue'} 
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
