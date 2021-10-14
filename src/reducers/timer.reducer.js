const timerReducer = (state, action) => {
    switch(action.type) {
        case 'START-TIMER':
        case 'STOP-TIMER':
        case 'FINISH-TIMER':
        case 'CHANGE-ACTIVE-STATE':
            const nState = state;
            nState.activeState = (action.payload.active);
            return nState;
        default:
            return state;
    }
}

export default timerReducer;