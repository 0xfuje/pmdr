import styled from "styled-components";

export const StyledButton = styled.button`
    // types: normal, active, dark, underlined, text
    padding: ${(props) =>
    (props.type === 'normal' || props.type === 'active' || props.type === 'dark')
    ? '0.375rem 0.75rem'
    : ''};
    background-color: ${(props) => {
        if (props.type === 'normal') return ({theme}) => theme.colors.main.light;
        if (props.type === 'active') return ({theme}) => theme.colors.main.dark;
        if (props.type === 'dark') return ({theme}) => theme.colors.mono.dark2;
        else { return 'inherit' }
    }};
    color: ${(props) => {
        if (props.type === 'normal') return ({theme}) => theme.colors.mono.light1;
        if (props.type === 'active') return ({theme}) => theme.colors.mono.light1;
        if (props.type === 'dark') return ({theme}) => theme.colors.mono.light1;
        if (props.type === 'text' || props.type === 'underline') return ({theme}) => theme.colors.mono.dark1;
    }};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: ${(props) => {
        if (props.type === 'normal') return ({theme}) => theme.fontWeights.normal;
        if (props.type === 'active') return ({theme}) => theme.fontWeights.medium;
        if (props.type === 'underline' || props.type === 'text' || props.type === 'dark') return ({theme}) => theme.fontWeights.medium;
    }};
    text-decoration: ${(props) => (props.type === 'underline') ? 'underline': ''};
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
`;
