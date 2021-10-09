import styled from "styled-components";


export const StyledIcon = styled.i`
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 0.2rem;
    border: 0.5px solid ${(props) => 
    (props.type === 'settings-white') 
    ?  ({theme}) => theme.colors.main.light
    :  ({theme}) => theme.colors.mono.grey3};

    background-color: ${(props) => (props.type === 'settings-white')
    ? ({theme}) => theme.colors.main.light
    : ''};
    
    .Icon {
        &-image {
            height: 0.875rem;
            
        }
    }
`