import React from 'react';
import { StyledIcon } from './styled/StyledIcon';
import ellipsisV from '../images/icons/ellipsis-v-solid.svg';
import ellipsisVWhite from '../images/icons/ellipsis-v-solid-white.svg';
import caretUp from '../images/icons/caret-up-solid.svg';
import caretDown from '../images/icons/caret-down-solid.svg';
import check from '../images/icons/check-solid.svg';
import cross from '../images/icons/times-solid.svg';



function Icon(props) {
    let source;
    if (props.type === 'settings-normal') source = ellipsisV;
    if (props.type === 'settings-white') source = ellipsisVWhite;
    if (props.type === 'caret-up') source = caretUp;
    if (props.type === 'caret-down') source = caretDown;
    if (props.type === 'check') source = check;
    if (props.type === 'cross') source = cross;
    return (
        <StyledIcon className='Icon' type={props.type} onClick={props.onClick} isChecked={props.isChecked}>
            <img className='Icon-image' src={source} alt={props.alt} />
        </StyledIcon>
    )
}

export default Icon
