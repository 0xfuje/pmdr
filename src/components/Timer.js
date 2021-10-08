import React from 'react';
import { StyledTimer } from "./styled/StyledTimer";
import Button from './Button';
import Clock from './Clock';
import GiantButton from './GiantButton';
import FinishButton from './FinishButton';

function Timer(props) {
    return (
        <StyledTimer className='Timer'>
            <div className="Timer-buttons">
                <Button active={true} text='Pomodoro'/>
                <Button text='Break'/>
            </div>
            <Clock time={'12:42'} />
            <div className="Timer-controll">
                <GiantButton text='stop' />
                <FinishButton />
            </div>
            
        </StyledTimer>
    )
}

export default Timer
