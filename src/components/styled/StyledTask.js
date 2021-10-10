import styled from "styled-components";

export const StyledTask = styled.div`
    ${(props) => console.log(props.isActive)}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: 0.2rem;
    margin-bottom: 0.625rem;
    cursor: pointer;
    border-left: 0.5rem solid;
    border-color: ${(props) => (props.isActive)
        ? ({theme}) => theme.colors.mono.grey3
        : ({theme}) => theme.colors.mono.light1
    };
    &:hover {
        border-color: ${(props) => (props.isActive)
        ? ({theme}) => theme.colors.mono.grey3
        : ({theme}) => theme.colors.mono.grey1
        };
    };
    .Task {
        &-title {
            color: ${({theme}) => theme.colors.mono.dark1};
            font-size: ${({theme}) => theme.fontSizes.medium};
        }
        &-pmdrs {
            color: ${({theme}) => theme.colors.mono.grey3};
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: ${({theme}) => theme.fontWeights.medium};
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

