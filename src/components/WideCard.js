import React from 'react';
import { StyledWideCard } from './styled/StyledWideCard';
import plus from '../images/icons/plus-circle-solid.svg';

function WideCard(props) {
    const icon = <img className='WideCard-plusIcon' src={plus} alt="Add Task"/>
    return (
        <StyledWideCard className='WideCard' onClick={props.onClick}>
            {props.type === 'action' ? icon : ''}
            <h2 className="WideCard-text">{props.text}</h2>
        </StyledWideCard>
    )
}

export default WideCard;
