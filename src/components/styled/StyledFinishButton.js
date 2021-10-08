import styled from 'styled-components';

export const StyledFinishButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4.5rem;
    border: none;
    cursor: pointer;
    width: 2rem;
    background-color: ${({theme}) => theme.colors.main.light};

`