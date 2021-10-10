import styled from "styled-components";

export const StyledGiantButton = styled.button`
    font-size: ${({theme}) => theme.fontSizes.large};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    background-color: ${({theme}) => theme.colors.mono.light1};
    color: ${({theme}) => theme.colors.main.light};
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 0.2rem;
`