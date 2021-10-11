import React, {createContext, useState, useReducer} from 'react';
import { changeTheme } from '../Theme';

const defTimer = {
    timeLeft: '30:00',
    activeState: 'Pomodoro',
    isCounting: false,
    states: [
        {name: 'Pomodoro', color: 'red'},
        {name: 'Break', color: 'blue'},
        {name: 'Long Break', color: 'blue'} 
    ]
}

export const TimerContext = createContext();

export function TimerProvider(props) {
    const [timer, setTimer] = useState(defTimer);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const changeActive = (active) => {
        const newTimer = timer;
        newTimer.activeState = active;
        setTimer(newTimer);
        console.log(timer);
    }
    return (
        <TimerContext.Provider value={{timer, changeActive, changeTheme, forceUpdate}}>
            {props.children}
        </TimerContext.Provider>
    );
}
