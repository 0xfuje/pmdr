import styled from "styled-components";

export const StyledCurrentTask = styled.div`
    margin: 1.5rem auto 3rem;
    .CurrentTask {
        &-number {
            color: ${({theme}) => theme.colors.mono.grey1};
            font-size: ${({theme}) => theme.fontSizes.small};
            text-align: center;
        }
        &-title {
            color: ${({theme}) => theme.colors.mono.light2};
            font-size:  ${({theme}) => theme.fontSizes.medium};
            font-weight: ${({theme}) => theme.fontWeights.normal};
            text-align: center;
        }
    }
`