import styled from "styled-components";

export const StyledTaskEdit = styled.div`
    background-color: ${({theme}) => theme.colors.mono.light1};
    border-radius: 0.2rem;
    margin: 0.75rem auto;
    .TaskEdit {
        &-main {
            padding: 1.5rem 1.5rem 0.5rem;
        }
        &-title {
            padding: 0.25rem 0.5rem;
            width: 100%;
            font-size: ${({theme}) => theme.fontSizes.large};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            color: ${({theme}) => theme.colors.mono.dark1};
            background-color: ${({theme}) => theme.colors.mono.light1};
            border: 1px solid ${({theme}) => theme.colors.mono.grey3};
            border-radius: 0.2rem;
            &:hover, &:focus, &:focus-visible {
                border: 1px solid ${({theme}) => theme.colors.mono.grey2};
            }
        }
        &-pmdr {
            margin-top: 0.5rem;
            &-title {
                font-size: ${({theme}) => theme.fontSizes.medium};
                color: ${({theme}) => theme.colors.mono.dark1};
                margin-bottom: 0.25rem;
            }
            &-input {
                display: flex;
                gap: 0.25rem;
                margin-bottom: 1.5rem;
            }
            &-numInput {
                background-color: ${({theme}) => theme.colors.mono.light2};
                border: none;
                width: 4rem;
                padding: 0 0.5rem;
                text-align: right;
                font-size: ${({theme}) => theme.fontSizes.small};
                font-weight: ${({theme}) => theme.fontWeights.medium};
                color: ${({theme}) => theme.colors.mono.dark1};
                --moz-appearance: textField;
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
        }
        &-buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;
            padding: 1rem 2rem;
            background-color: ${({theme}) => theme.colors.mono.light2};
            border-radius: 0 0 0.2rem 0.2rem;
            &-right {
                display: flex;
                gap: 1rem;
            }
        }
    }
`;