const timerReducer = (state, action) => {
    switch(action.type) {
        case 'START-TIMER':
            console.log('start');
            return ({...state, isCounting: true, isStartedBefore: true});
        case 'RESUME-TIMER':
            console.log('resume');
            return ({...state, isCounting: true });
        case 'TICK':
            console.log(action.payload.time);
            return ({...state, timeLeft: action.payload.time, timeLeftInMs: action.payload.timeInMs});
        case 'STOP-TIMER':
            console.log('stop');
            return ({...state, isCounting: false});
        case 'FINISH-TIMER':
            console.log('finish');
            return ({...state, isCounting: false, isStartedBefore: false, timeLeft: state.pomodoroLength + ':00', timeLeftInMs: ''});
        case 'OPEN-SETTINGS':
            return ({...state, isSettingsDisplayed: true});
        case 'CLOSE-SETTINGS':
            return ({...state, isSettingsDisplayed: false})
        case 'AUTO-START-BREAKS':
            return ({...state, autoStartBreak: !state.autoStartBreak});
        case 'AUTO-START-POMODOROS':
            return ({...state, autoStartPomodoro: !state.autoStartPomodoro});
        case 'CHANGE-ACTIVE-STATE':
            return ({...state, activeState: action.payload.active});
        case 'SAVE-SETTINGS':
            return ({
                ...state,
                pomodoroLength: parseInt(action.payload.inputs.pomodoro),
                shortBreakLength: parseInt(action.payload.inputs.shortBreak),
                longBreakLength: parseInt(action.payload.inputs.longBreak),
                longBreakInterval: parseInt(action.payload.inputs.longBreakInterval),
                timeLeft: action.payload.inputs.pomodoro + ':00',
                isSettingsDisplayed: false
            });
        default:
            return state;
    }
}

export default timerReducer;