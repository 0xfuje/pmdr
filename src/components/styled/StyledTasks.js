import styled from "styled-components";

export const StyledTasks = styled.div`
    margin: 2rem auto 0;
    .Tasks {
        &-head {
            display: flex;
            justify-content: space-between;
        }
        &-title {
            color: ${({theme}) => theme.colors.mono.light1};
            font-size: ${({theme}) => theme.fontSizes.large};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            margin-bottom: 0.75rem;
        }
        &-line {
            margin-bottom: 1rem;
            background-color: ${({theme}) => theme.colors.mono.light1};
            height: 2px;
            max-width: ${({theme}) => theme.width.container};
            &-2 {
                margin-top: 2rem;
                margin-bottom: 0;
            }
        }
    }
`