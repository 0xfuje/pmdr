const timerReducer = (state, action) => {
    switch(action.type) {
        case 'START-TIMER':
            return ({...state, isCounting: true, isStartedBefore: true});
        case 'RESUME-TIMER':
            return ({...state, isCounting: true });
        case 'TICK':
            console.log(action.payload.time);
            return ({
                ...state,
                timeLeft: action.payload.time,
                timeLeftInMs: action.payload.timeInMs,
                percentage: action.payload.percentage
            });
        case 'STOP-TIMER':
            return ({...state, isCounting: false});
        case 'FINISH-TIMER':
            return ({...state,
                isCounting: false,
                isStartedBefore: false,
                timeLeft: action.payload.timeLeft,
                timeLeftInMs: '',
                currentInterval: action.payload.interval,
                active: action.payload.active,
                states: action.payload.states,
                percentage: action.payload.percentage,
            });
        case 'OPEN-SETTINGS':
            return ({...state, isSettingsDisplayed: true});
        case 'CLOSE-SETTINGS':
            return ({...state, isSettingsDisplayed: false})
        case 'AUTO-START-BREAKS':
            return ({...state, autoStartBreak: !state.autoStartBreak});
        case 'AUTO-START-POMODOROS':
            return ({...state, autoStartPomodoro: !state.autoStartPomodoro});
        case 'CHANGE-ACTIVE-STATE':
            return ({...state,
                isCounting: false,
                isStartedBefore: false,
                states: action.payload.states,
                active: action.payload.active,
                timeLeft: action.payload.timeLeft,
                percentage: 0
            });
        case 'SAVE-SETTINGS':
            return ({
                ...state,
                isCounting: false,
                isStartedBefore: false,
                percentage: 0,
                states: [
                    {...state.states[0], length: action.payload.inputs.pomodoro},
                    {...state.states[1], length: action.payload.inputs.shortBreak},
                    {...state.states[2], length: action.payload.inputs.longBreak}
                ],
                longBreakInterval: parseInt(action.payload.inputs.longBreakInterval),
                timeLeft: action.payload.timeLeft.toString().padStart(2, 0) + ':00',
                active: {...state.active, length: action.payload.timeLeft},
                isSettingsDisplayed: false
            });
        default:
            return state;
    }
}

export default timerReducer;