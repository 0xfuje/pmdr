import React, { useContext } from 'react';
import {StyledTaskEdit} from './styled/StyledTaskEdit';
import Icon from './Icon';
import Button from './buttons/Button';
import { TasksContext } from '../context/tasks.context';

function TaskEdit(props) {
    const { taskDispatch } = useContext(TasksContext);
    const handleDeleteClick = () => {
        taskDispatch({ type: 'DELETE', payload: { id: props.id }});
    }
    return (
        <StyledTaskEdit className='TaskEdit'>
            <div className="TaskEdit-main">
            <h2 className='TaskEdit-title' contentEditable='true'>{props.title}</h2>
            <div className='TaskEdit-pmdr'>
                <h2 className='TaskEdit-pmdr-title'>Estimated pomodoros</h2>
                <div className='TaskEdit-pmdr-input'>
                    <input type='number' className='TaskEdit-pmdr-numInput'/>
                    <Icon alt='Add pmdr' type={'caret-up'} />
                    <Icon alt='Add pmdr' type={'caret-down'} />
                </div>
                <Button className='TaskEdit-button-addProject' type='underline' text='+ Add to Project'/>
            </div>
            </div>
            <div className='TaskEdit-buttons'>
                <Button type='text' text='Delete' onClick={handleDeleteClick}/>
                <div className="TaskEdit-buttons-right">
                    <Button type='text' text='Cancel' />
                    <Button type='dark' text='Save' />
                </div>
            </div>
        </StyledTaskEdit>
    )
}

export default TaskEdit
