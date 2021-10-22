import styled from "styled-components";

export const StyledTaskSettings = styled.div`
    display: ${(props) => props.display ? 'block' : 'none'};
    position: absolute;
    right: 0;
    top: 2.25rem;
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: .2rem;
    padding: 0;
    z-index: 100;
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0,0,0, 0.3);
    .TaskSettings {
        &-option {
            cursor: pointer;
            color: ${({theme}) => theme.colors.mono.grey4};
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            background-color: ${({theme}) => theme.colors.mono.light1};
            padding: 0.6rem 1.2rem;
            &-1 {
                border-radius: 0.2rem 0.2rem 0 0;
            }
            &-3 {
                border-radius: 0 0 0.2rem 0.2rem;
            }
            &:hover {
                background-color: ${({theme}) => theme.colors.mono.light2};
            }
        }
    }
`;