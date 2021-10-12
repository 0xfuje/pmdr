import React, {createContext, useState, useReducer} from 'react';

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
    const changeActive = (active) => {
        const newTimer = timer;
        newTimer.activeState = active;
        setTimer(newTimer);
    }
    return (
        <TimerContext.Provider value={{timer, changeActive}}>
            {props.children}
        </TimerContext.Provider>
    );
}
