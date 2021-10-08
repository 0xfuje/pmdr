import styled from "styled-components";

export const StyledProgressLine = styled.div`
    background-color: ${({theme}) => theme.colors.main.dark};
    height: 5px;
    margin: 0 auto;
    max-width: ${({theme}) => theme.width.header};
`;