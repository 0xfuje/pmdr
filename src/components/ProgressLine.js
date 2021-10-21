import React, {useContext, useEffect, useState} from 'react';
import { StyledProgressLine } from './styled/StyledProgressLine';
import { TimerContext } from '../context/timer.context';

function ProgressLine() {
    console.log('rendered progressline')
    const { timer } = useContext(TimerContext);
    return (
        <StyledProgressLine className='ProgressLine' width={timer.percentage}>
            <div className="ProgressLine-bar"></div>
        </StyledProgressLine>
    )
}

export default ProgressLine;
