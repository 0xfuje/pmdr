import styled from "styled-components";

export const StyledButton = styled.button`
    padding: ${({theme}) => theme.button.padding};
    background-color: ${(props)  => (props.active) 
    ? ({theme}) => theme.colors.main.dark
    : ({theme}) => theme.colors.main.light};
    color: ${(props)  => (props.active) 
    ? ({theme}) => theme.colors.font.light
    : ({theme}) => theme.colors.font.lightGrey};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 600;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
`;
