import React, {useContext, useReducer} from 'react';
import { TasksContext } from '../context/tasks.context';
import {StyledTasks} from './styled/StyledTasks';
import Task from './Task';
import Icon from './Icon';
import TaskEdit from './TaskEdit';
import WideCard from './WideCard';

function Tasks(props) {
    const {tasks, taskDispatch} = useContext(TasksContext);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    console.log(tasks);
    
    
    const handleAddClick = () => {
        taskDispatch({ type: 'ADD' });
        forceUpdate();
    }

    
    const displayTasks = tasks.map((t) => {
        if (t.isEdited) return <TaskEdit
            title={t.title}
            all={t.all}
            key={t.id}
            id={t.id}
            forceUpdate={forceUpdate}
        />
        if (!t.isEdited) return <Task
            title={t.title}
            done={t.done}
            all={t.all}
            key={t.id}
            id={t.id}
            isActive={t.isActive}
            isEdited={t.isEdited}
            forceUpdate={forceUpdate}
        />
    })

    return (
        <StyledTasks className='Tasks'>
            <div className="Tasks-head">
                <h2 className="Tasks-title">Tasks</h2>
                <Icon type='settings-white'/>
            </div>
            <div className="Tasks-line Tasks-line-1"></div>
            
            {displayTasks}
            <WideCard type='action' text='Add a Task' onClick={handleAddClick}/>
            <div className="Tasks-line Tasks-line-2"></div>
        </StyledTasks>
    )
}

export default Tasks
