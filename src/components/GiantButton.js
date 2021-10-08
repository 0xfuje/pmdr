import React from 'react';
import { StyledGiantButton } from './styled/StyledGiantButton';

function GiantButton(props) {
    return (
        <StyledGiantButton className='GiantButton'>
            {props.text}
        </StyledGiantButton>
    )
}

export default GiantButton;
