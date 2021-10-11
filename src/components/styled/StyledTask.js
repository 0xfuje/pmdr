import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: 0.2rem;
    margin-bottom: 0.625rem;
    cursor: pointer;
    border-left: 0.5rem solid;
    border-color: ${(props) => (props.isActive)
        ? ({theme}) => theme.colors.mono.grey4
        : ({theme}) => theme.colors.mono.light1
    };
    &:hover {
        border-color: ${(props) => (props.isActive)
        ? ({theme}) => theme.colors.mono.grey4
        : ({theme}) => theme.colors.mono.grey1
        };
    };
    .Task {
        &-flex {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
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
        
    }
`

