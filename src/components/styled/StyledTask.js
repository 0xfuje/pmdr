import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: 0.2rem;
    .Task {
        &-title {
            color: ${({theme}) => theme.colors.mono.dark1};
            font-size: ${({theme}) => theme.fontSizes.medium};
        }
        &-pmdrs {
            color: ${({theme}) => theme.colors.mono.grey3};
            font-size: ${({theme}) => theme.fontSizes.small};
            span {
                font-size: ${({theme}) => theme.fontSizes.large};
            }
        }
        &-right {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
    }
`