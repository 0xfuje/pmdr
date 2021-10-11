import React, { useContext, useReducer } from 'react';
import { StyledTimer } from "./styled/StyledTimer";
import Button from './buttons/Button';
import Clock from './Clock';
import GiantButton from './buttons/GiantButton';
import FinishButton from './buttons/FinishButton';

import { TimerContext } from '../context/timer.context';

function Timer(props) {
    const {timer, changeActive, forceUpdate} = useContext(TimerContext);
    const handleButtonClick = (st) => {
        changeActive(st.name);
        forceUpdate();
    }
    const displayButtons = timer.states.map((st) => {
        if (st.name === timer.activeState)
            return <Button
                type='active'
                text={st.name}
                onClick={() => handleButtonClick(st)}/>
        return <Button
            type='normal'
            text={st.name}
            onClick={() => handleButtonClick(st)}/>
    });
    

    return (
        <StyledTimer className='Timer'>
            <div className="Timer-buttons">
                {displayButtons}
            </div>
            <Clock time={timer.timeLeft} />
            <div className="Timer-controll">
                <GiantButton text={timer.isCounting ? 'stop' : 'start'} />
                {timer.isCounting ? <FinishButton /> : ''}
            </div>
        </StyledTimer>
    )
}

export default Timer
