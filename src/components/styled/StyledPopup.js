import styled from "styled-components";

export const StyledPopup = styled.div`
    z-index: 100;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.mono.light1};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.4);
    .Popup {
        &-window {
            position: absolute;
            top: 20vh;
            left: 50%;
            transform: translateX(-50%);
            width: ${({theme}) => theme.width.popup};
            background-color: ${({theme}) => theme.colors.mono.light1};
            border-radius: 0.2rem;
        }
        &-head {
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            &::after {
                height: 0.5px;
                background-color: ${({theme}) => theme.colors.mono.grey1};
                width: calc(100% - 3rem);
                position: absolute;
                content: '';
                bottom: 0;
            }
        }
        &-body {
            padding: 0 1.5rem;
        }
        &-section {
            padding: 1.5rem 0;
            position: relative;
            display: flex;
            justify-content: space-between;
            &::after {
                height: 0.5px;
                background-color: ${({theme}) => theme.colors.mono.grey1};
                width: 100%;
                position: absolute;
                content: '';
                bottom: 0;
            }
            &-time {
                display: block;
                &-flex {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 0.5rem;
                }
            }
            &-alarmSound {
                &::after {
                    height: 0;
                }
            }
            
        }
        &-title {
            color: ${({theme}) => theme.colors.mono.grey3};
            font-size: ${({theme}) => theme.fontSizes.large};
        }
        &-smTitle {
            color: ${({theme}) => theme.colors.mono.grey4};
            font-size: ${({theme}) => theme.fontSizes.medium};
        }
        &-tinyTitle {
            color: ${({theme}) => theme.colors.mono.grey2};
            font-size: ${({theme}) => theme.fontSizes.small};
        }
        &-numInput {
            background-color: ${({theme}) => theme.colors.mono.light2};
            border: none;
            width: 5rem;
            padding: 0.25rem 0.5rem;
            text-align: right;
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: ${({theme}) => theme.fontWeights.medium};
            color: ${({theme}) => theme.colors.mono.dark1};
            text-align: left;
        }
        &-button {
            padding: 1rem 2rem;
            background-color: ${({theme}) => theme.colors.mono.light2};
            border-radius: 0 0 0.2rem 0.2rem;
            display: flex;
            justify-content: flex-end;
        }
    }
`;