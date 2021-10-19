import React from 'react';
import { StyledHeader } from './styled/StyledHeader';
import Button from './buttons/Button';
import { StyledProgressLine } from './styled/StyledProgressLine';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
        <StyledHeader className="Header">
            <div className="Header-logo">pmdr</div>
            {/* <div className="Header-navigation">
                <ul className='Header-list'>
                        <li className='Header-list-item'>
                            <NavLink activeClassName='active' to='/' exact>
                                <Button type={'normal'} text='Timer'/>
                            </NavLink>
                        </li>
                        <li className='Header-list-item'>
                            <NavLink activeClassName='active' to='/log' exact>
                                <Button type={'normal'} text='Log'/>
                            </NavLink>
                        </li>
                </ul>
            </div> */}
        </StyledHeader>
        <StyledProgressLine />
        </>
    )
}

export default Header
