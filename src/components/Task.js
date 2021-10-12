import React from 'react';
import { StyledTask } from './styled/StyledTask';
import Icon from './Icon';


function Task(props) {
    
    return (
        <StyledTask className='Task' isActive={props.isActive} onClick={props.onClick}>
            <Icon alt='Check' type={'check-unchecked'} />
            <div className="Task-flex">
                <h2 className="Task-title">{props.title}</h2>
                <p className='Task-pmdrs'><span>{props.done}</span> / {props.all}</p>
            </div>
            <Icon alt='Task settings' type={'settings-normal'}/>
        </StyledTask>
    )
}

export default Task;
