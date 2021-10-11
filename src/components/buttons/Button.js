import React from 'react';
import { StyledButton } from '../styled/buttons/StyledButton';


function Button(props) {
    return (
        <StyledButton className='Button' type={props.type} onClick={props.onClick}>
            <span>{props.text}</span>
        </StyledButton>
    )
}

export default Button;
