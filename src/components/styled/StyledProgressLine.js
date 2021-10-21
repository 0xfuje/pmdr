import styled from "styled-components";

export const StyledProgressLine = styled.div`
    ${console.log((props) => props.width)};
    background-color: ${({theme}) => theme.colors.main.dark};
    height: 5px;
    margin: 0 auto;
    max-width: ${({theme}) => theme.width.header};
    .ProgressLine {
        &-bar {
        background-color: ${({theme}) => theme.colors.mono.light1};
        height: 5px;
        width: ${(props) => props.width + '%'};
    }
    }
    
`;