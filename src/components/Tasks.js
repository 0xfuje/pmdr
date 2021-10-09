import React from 'react';
import StyledTasks from './styled/StyledTasks';
import Task from './Task';

function Tasks(props) {
    const tasks = props.tasks.map((t) => {
        <Task title={t.title} active={false} pmdrs={[1, 3]} isEdited={false} />
    })
    return (
        <StyledTasks>
            
        </StyledTasks>
    )
}

export default Tasks
