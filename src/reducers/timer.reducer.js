const timerReducer = (state, action) => {
    switch(action.type) {
        case 'START-TIMER':
        case 'STOP-TIMER':
        case 'FINISH-TIMER':
        case 'OPEN-SETTINGS':
            const nState6 = state;
            nState6.isSettingsDisplayed = true;
            return nState6;
        case 'CLOSE-SETTINGS':
            const nState5 = state;
            nState5.isSettingsDisplayed = false;
            return nState5;
        case 'AUTO-START-BREAKS':
            console.log('BREAK');
            const nState3 = state;
            nState3.autoStartBreak = !state.autoStartBreak;
            return nState3;
        case 'AUTO-START-POMODOROS':
            console.log('POMODORO');
            const nState2 = state;
            nState2.autoStartPomodoro = !state.autoStartPomodoro;
            return nState2;
        case 'CHANGE-ACTIVE-STATE':
            const nState1 = state;
            nState1.activeState = (action.payload.active);
            return nState1;
        case 'SAVE-SETTINGS':
            const nState4 = state;
            nState4.pomodoroLength = parseInt(action.payload.inputs.pomodoro);
            nState4.shortBreakLength = parseInt(action.payload.inputs.shortBreak);
            nState4.longBreakLength = parseInt(action.payload.inputs.longBreak);
            nState4.longBreakInterval = parseInt(action.payload.inputs.longBreakInterval);
            nState4.isSettingsDisplayed = false;
            console.log(nState4);
            return nState4;
        default:
            return state;
    }
}

export default timerReducer;