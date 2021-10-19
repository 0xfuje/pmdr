import React, { useContext, useState } from 'react';
import {StyledTaskEdit} from './styled/StyledTaskEdit';
import Icon from './Icon';
import Button from './buttons/Button';
import { TasksContext } from '../context/tasks.context';

function TaskEdit(props) {
    // Handlers, Dispatch
    const { taskDispatch } = useContext(TasksContext);
    const handleDeleteClick = () => {
        taskDispatch({ type: 'DELETE', payload: { id: props.id }});
    }
    const handleCancelClick = () => {
        taskDispatch({ type: 'CANCEL-EDIT', payload: { id: props.id }});
    }
    const handleSaveClick = () => {
        taskDispatch({ type: 'SAVE-EDIT', payload:
        { id: props.id, title: title, all: pmdrs }
    });
    }

    // TaskEdit State
    const [pmdrs, setPmdrs] = useState(props.all);
    const [title, setTitle] = useState(props.title);

    const handlePmdrChange = (e) => { setPmdrs(parseInt(e.target.value)); }
    const handleTitleChange = (e) => { setTitle(e.target.value); }
    

    return (
        <StyledTaskEdit className='TaskEdit'>
            <div className="TaskEdit-main">
            <input className='TaskEdit-title' value={title} onChange={handleTitleChange} />
            <div className='TaskEdit-pmdr'>
                <h2 className='TaskEdit-pmdr-title'>Estimated pomodoros</h2>
                <div className='TaskEdit-pmdr-input'>
                    <input type='number' value={pmdrs} min='0' max='20' onChange={handlePmdrChange} className='TaskEdit-pmdr-numInput'/>
                    <Icon alt='Add pmdr' type={'caret-up'} onClick={() => setPmdrs(pmdrs + 1)} />
                    <Icon alt='Add pmdr' type={'caret-down'} onClick={() => (pmdrs > 1) ? setPmdrs(pmdrs - 1) : ''} />
                </div>
                {/* <Button className='TaskEdit-button-addProject' type='underline' text='+ Add to Project'/> */}
            </div>
            </div>
            <div className='TaskEdit-buttons'>
                <Button type='text' text='Delete' onClick={handleDeleteClick}/>
                <div className="TaskEdit-buttons-right">
                    <Button type='text' text='Cancel' onClick={handleCancelClick}/>
                    <Button type='dark' text='Save' onClick={handleSaveClick}/>
                </div>
            </div>
        </StyledTaskEdit>
    )
}

export default TaskEdit
