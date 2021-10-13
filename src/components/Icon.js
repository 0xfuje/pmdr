import React from 'react';
import { StyledIcon } from './styled/StyledIcon';
import settings from '../images/icons/ellipsis-v-solid.svg';
import settingsWhite from '../images/icons/ellipsis-v-solid-white.svg';
import caretUp from '../images/icons/caret-up-solid.svg';
import caretDown from '../images/icons/caret-down-solid.svg';
import checkUnchecked from '../images/icons/check-square-solid-normal.svg';
import checkChecked from '../images/icons/check-square-solid-active.svg';


function Icon(props) {
    let source;
    if (props.type === 'settings-normal') source = settings;
    if (props.type === 'settings-white') source = settingsWhite;
    if (props.type === 'caret-up') source = caretUp;
    if (props.type === 'caret-down') source = caretDown;
    if (props.type === 'check-unchecked') source = checkUnchecked;
    if (props.type === 'check-checked') source = checkChecked;
    return (
        <StyledIcon className='Icon' type={props.type} onClick={props.onClick}>
            <img className='Icon-image' src={source} alt={props.alt} />
        </StyledIcon>
    )
}

export default Icon
