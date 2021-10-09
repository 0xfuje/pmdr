import styled from "styled-components";

export const StyledClock = styled.h1`
    color: ${({theme}) => theme.colors.mono.light1};
    font-size: ${({theme}) => theme.fontSizes.giant};
    display: flex;
    justify-content: center;
`