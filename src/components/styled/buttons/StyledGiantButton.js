import styled from "styled-components";

export const StyledGiantButton = styled.button`
    font-size: ${({theme}) => theme.fontSizes.large};
    background-color: ${({theme}) => theme.colors.mono.light1};
    color: ${({theme}) => theme.colors.main.light};
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.2rem;
`