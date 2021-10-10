import React from 'react';
import { StyledTask } from './styled/StyledTask';
import Icon from './Icon';

function Task(props) {
    return (
        <StyledTask className='Task' isActive={props.isActive}>
            <h2 className="Task-title">{props.title}</h2>
            <div className="Task-right">
                <p className='Task-pmdrs'><span>{props.done}</span> / {props.all}</p>
                <Icon alt='Task settings' type={'settings-normal'}/>
            </div>
        </StyledTask>
    )
}

export default Task;
