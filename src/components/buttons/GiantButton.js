import React from 'react';
import { StyledGiantButton } from '../styled/buttons/StyledGiantButton';

function GiantButton(props) {
    return (
        <StyledGiantButton className='GiantButton' onClick={props.onClick}>
            {props.text}
        </StyledGiantButton>
    )
}

export default GiantButton;
