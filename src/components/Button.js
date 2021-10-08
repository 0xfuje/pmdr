import React from 'react';
import { StyledButton } from './styled/StyledButton';

function Button(props) {
    return (
        <StyledButton active={props.active}>
            <span>{props.text}</span>
        </StyledButton>
    )
}

export default Button
