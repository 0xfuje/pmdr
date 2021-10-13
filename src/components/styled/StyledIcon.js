import styled from "styled-components";


export const StyledIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 1.6rem;
    z-index: 1000;
    width: ${(props) => (props.type === 'settings-white')
        ? '1.6rem'
        : '2rem'};
    border-radius: 0.2rem;
    border: 0.5px solid ${(props) => {
        if (props.type === 'settings-white') return ({theme}) => theme.colors.main.light;
        if (props.type === 'check' && props.isChecked) return ({theme}) => theme.colors.main.light;
        else return ({theme}) => theme.colors.mono.grey2}
    };
    background-color: ${(props) => {
        if (props.type === 'settings-white') return ({theme}) => theme.colors.main.light;
        if (props.type === 'check' && props.isChecked) return ({theme}) => theme.colors.main.light;
        if (props.type === 'check') return ({theme}) => theme.colors.mono.grey1;
    }};
    fill: white;
    &:hover {
        background-color: ${(props) => {
            if (props.type === 'settings-normal' || (props.type === 'check' && !props.isChecked)) return ({theme}) => theme.colors.mono.light2;
        }}
    }
    .Icon {
        &-image {
            height: 0.875rem;
            width: 0.875rem;
        };
            
    }
`