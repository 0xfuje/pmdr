import React, {useContext} from 'react';
import { StyledTask } from './styled/StyledTask';
import Icon from './Icon';
import { TasksContext } from '../context/tasks.context';


function Task(props) {
    const { taskDispatch } = useContext(TasksContext);

    const handleSettingsClick = () => {
        taskDispatch({ type: 'TOGGLE-EDIT', payload: { id: props.id }});
    }
    const handleTaskClick = () => {
        taskDispatch({ type: 'TOGGLE-ACTIVE', payload: { id: props.id }});
    }
    const handleCheckClick = () => {
        taskDispatch({ type: 'TOGGLE-CHECK', payload: { id: props.id }});
    }
    return (
        <StyledTask className='Task' isActive={props.isActive} isChecked={props.isChecked} onClick={handleTaskClick}>
            <Icon alt='Check' type={'check'} onClick={handleCheckClick} isChecked={(props.isChecked) ? true : false} />
            <div className="Task-flex">
                <h2 className="Task-title">{props.title}</h2>
                <p className='Task-pmdrs'><span>{props.done}</span> / {props.all}</p>
            </div>
            <Icon alt='Task settings' type={'settings-normal'} onClick={handleSettingsClick}/>
        </StyledTask>
    )
}

export default Task;
