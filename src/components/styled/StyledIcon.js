import styled from "styled-components";


export const StyledIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 1.6rem;
    z-index: 10;
    width: ${(props) => (props.type === 'settings-white' || props.type === 'cross' || props.type === 'settings-cog')
        ? '1.6rem'
        : '2rem'};
    border-radius: 0.2rem;
    border: 0.5px solid ${(props) => {
        if (props.type === 'settings-white' || props.type === 'settings-cog') return ({theme}) => theme.colors.main.light;
        if (props.type === 'check' && props.isChecked) return ({theme}) => theme.colors.main.light;
        if (props.type === 'cross') return ({theme}) => theme.colors.mono.dark1;
        else return ({theme}) => theme.colors.mono.grey2}
    };
    background-color: ${(props) => {
        if (props.type === 'settings-white') return ({theme}) => theme.colors.main.light;
        if (props.type === 'check' && props.isChecked) return ({theme}) => theme.colors.main.light;
        if (props.type === 'check') return ({theme}) => theme.colors.mono.grey1;
        if (props.type === 'cross') return ({theme}) => theme.colors.mono.grey4;
        if (props.type === 'settings-cog') return ({theme}) => theme.colors.mono.light1;
    }};
    fill: white;
    &:hover {
        background-color: ${(props) => {
            if (props.type === 'settings-normal' || (props.type === 'check' && !props.isChecked)) return ({theme}) => theme.colors.mono.light2;
            if (props.type === 'cross') return ({theme}) => theme.colors.mono.dark1;
        }}
    }
    .Icon {
        &-image {
            height: 0.875rem;
            width: 0.875rem;
        };
            
    }
`