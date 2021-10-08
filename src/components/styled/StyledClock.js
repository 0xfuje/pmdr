import styled from "styled-components";

export const StyledClock = styled.h1`
    color: ${({theme}) => theme.colors.font.light};
    font-size: ${({theme}) => theme.fontSizes.giant};
    display: flex;
    justify-content: center;
`