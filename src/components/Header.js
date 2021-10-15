import React, {useContext} from 'react';
import { StyledHeader } from './styled/StyledHeader';
import Button from './buttons/Button';
import { StyledProgressLine } from './styled/StyledProgressLine';
import { NavLink } from 'react-router-dom';
import { TimerContext } from '../context/timer.context';

function Header() {
    const { timerDispatch } = useContext(TimerContext);
    const handleSettingsClick = () => {
        timerDispatch({ type: 'OPEN-SETTINGS'});
    }
    return (
        <>
        <StyledHeader className="Header">
            <div className="Header-logo">pmdr</div>
            <div className="Header-navigation">
                <ul className='Header-list'>
                        <li className='Header-list-item'>
                            <NavLink activeClassName='active' to='/' exact>
                                <Button type={'normal'} text='Timer'/>
                            </NavLink>
                        </li>
                        <li className='Header-list-item'>
                            <NavLink activeClassName='active' to='/log' exact>
                                <Button type={'normal'} text='Projects / Log'/>
                            </NavLink>
                        </li>
                        <li className='Header-list-item'>
                            <Button type={'normal'} text='Settings' onClick={handleSettingsClick}/>
                        </li>
                </ul>
            </div>
        </StyledHeader>
        <StyledProgressLine />
        </>
    )
}

export default Header
