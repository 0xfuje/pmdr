import React from 'react';
import { StyledCurrentTask } from './styled/StyledCurrentTask';

function CurrentTask(props) {
    return (
        <StyledCurrentTask className='CurrentTask'>
            <p className="CurrentTask-number">#{props.num}</p>
            <h2 className="CurrentTask-title">{props.title}</h2>
        </StyledCurrentTask>
    )
}

export default CurrentTask;
