import React from 'react';
import { StyledToggleSwitch } from './styled/StyledToggleSwitch';

function ToggleSwitch(props) {
    return (
        <StyledToggleSwitch className='ToggleSwitch' isChecked={props.isChecked} onClick={props.onClick}>
            <input type='checkbox' className="ToggleSwitch-checkbox"/>
            <span className="ToggleSwitch-slider"></span>
        </StyledToggleSwitch>
    )
}

export default ToggleSwitch;
