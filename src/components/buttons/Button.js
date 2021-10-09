import React from 'react';
import { StyledButton } from '../styled/buttons/StyledButton';

function Button(props) {
    return (
        <StyledButton type={props.type}>
            <span>{props.text}</span>
        </StyledButton>
    )
}

export default Button
