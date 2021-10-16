import styled from "styled-components";

export const StyledTask = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: 0.2rem;
    margin-bottom: 0.625rem;
    border-left: 0.5rem solid;
    border-color: ${(props) => (props.isActive)
        ? ({theme}) => theme.colors.mono.grey4
        : ({theme}) => theme.colors.mono.light1
    };
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0,0,0, 0.3);
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
            max-width: 18rem;
            color: ${(props) => (props.isChecked) 
            ? ({theme}) => theme.colors.mono.grey2
            : ({theme}) => theme.colors.mono.grey4};
            font-size: ${({theme}) => theme.fontSizes.medium};
            text-decoration: ${(props) => (props.isChecked)
            ? 'line-through'
            : 'none'};
        }
        &-pmdrs {
            color: ${({theme}) => theme.colors.mono.grey2};
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            span {
                font-size: ${({theme}) => theme.fontSizes.large};
                
            }
        }
        
    }
`

