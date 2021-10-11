import React, {useContext} from 'react';
import { TasksContext } from '../context/tasks.context';
import { StyledCurrentTask } from './styled/StyledCurrentTask';

function CurrentTask(props) {
    const {tasks} = useContext(TasksContext);
    const current = tasks.filter((t) => (t.isActive))[0];
    console.log(current);
    return (
        <StyledCurrentTask className='CurrentTask'>
            <p className="CurrentTask-number">#{current.done}</p>
            <h2 className="CurrentTask-title">{current.title}</h2>
        </StyledCurrentTask>
    )
}

export default CurrentTask;
