import React from 'react';
import { StyledFinishButton } from '../styled/buttons/StyledFinishButton';
import forward from '../../images/icons/step-forward-solid.svg';

function FinishButton(props) {
    return (
        <StyledFinishButton className='FinishButton'>
            <img className='FinishButton-img' src={forward} alt="Finish This Pmdr" onClick={props.onClick}/>
        </StyledFinishButton>
    )
}

export default FinishButton
