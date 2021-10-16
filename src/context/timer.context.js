import React, {createContext, useReducer} from 'react';
import timerReducer from '../reducers/timer.reducer';

const calculateTimeLeft = (minLeft, secLeft) => {
    let currentTime = new Date().getTime();
    let futureTime = currentTime + (minLeft * 1000 * 60) + (secLeft * 1000);
    let difference = futureTime - currentTime;
    return difference;
}

const dateConverter = (dateToConvert) => {
    const date = new Date(dateToConvert);
    const seconds = Math.floor((date / 1000) % 60);
    const minutes = Math.floor((date / 1000 / 60) % 60);
    return (`${minutes}:${seconds}`); 
}

console.log(calculateTimeLeft(12, 23));

const defTimer = {
    pomodoroLength: 30,
    shortBreakLength: 10,
    longBreakLength: 30,
    longBreakInterval: 4,
    autoStartBreak: true,
    autoStartPomodoro: false,
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
