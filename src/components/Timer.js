import React from 'react';
import { StyledTimer } from "./styled/StyledTimer";
import Button from './buttons/Button';
import Clock from './Clock';
import GiantButton from './buttons/GiantButton';
import FinishButton from './buttons/FinishButton';

function Timer(props) {

    return (
        <StyledTimer className='Timer'>
            <div className="Timer-buttons">
                <Button type='active' text='Pomodoro'/>
                <Button type='normal' text='Break'/>
            </div>
            <Clock time={'12:42'} />
            <div className="Timer-controll">
                <GiantButton text={props.isCounting ? 'stop' : 'start'} />
               {props.isCounting ? <FinishButton /> : ''}
            </div>
        </StyledTimer>
    )
}

export default Timer
