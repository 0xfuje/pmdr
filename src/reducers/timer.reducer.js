import useToggle from "../hooks/useToggleState";

const timerReducer = (state, action) => {
    switch(action.type) {
        
        case 'START-TIMER':
        case 'STOP-TIMER':
        case 'FINISH-TIMER':
        case 'AUTO-START-BREAKS':
            console.log('BREAK');
            const nState3 = state;
            nState3.autoStartPomodoro = !state.autoStartPomodoro;
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
        default:
            return state;
    }
}

export default timerReducer;