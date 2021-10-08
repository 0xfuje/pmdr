import React from 'react';
import { StyledClock } from './styled/StyledClock';

function Clock(props) {
    return (
        <StyledClock className='Clock'>
            {props.time}
        </StyledClock>
    )
}

export default Clock
