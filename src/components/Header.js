import React from 'react';
import { StyledHeader } from './styled/StyledHeader';
import Button from './Button';
import { StyledProgressLine } from './styled/StyledProgressLine';

function Header() {
    return (
        <>
        <StyledHeader className="Header">
            <div className="Header-logo">pmdr</div>
            <div className="Header-navigation">
                <ul className='Header-list'>
                    <li className='Header-list-item'>
                        <Button active={true} text='Timer'/>
                    </li>
                    <li className='Header-list-item'>
                        <Button active={false} text='Log'/>
                    </li>
                    <li className='Header-list-item'>
                        <Button active={false} text='Projects'/>
                    </li>
                    <li className='Header-list-item'>
                        <Button active={false} text='Settings'/>
                    </li>
                </ul>
            </div>
        </StyledHeader>
        <StyledProgressLine />
        </>
    )
}

export default Header
