import styled from "styled-components";

export const StyledToggleSwitch = styled.div`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25.5px;

    .ToggleSwitch {
        &-checkbox {
            opacity: 0;
            width: 0;
            height: 0;
            
        }
        &-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${(props) => (props.isChecked)
            ? ({theme}) => theme.colors.main.light
            : ({theme}) => theme.colors.mono.grey1};
            transition: .3s;
            border-radius: 34px;
            &::before {
                position: absolute;
                content: "";
                height: 19.5px;
                width: 19.5px;
                left: 4px;
                bottom: 3px;
                background-color: ${({theme}) => theme.colors.mono.light1};
                transition: .3s;
                border-radius: 50%;
                transform: ${(props) => (props.isChecked)
                ? 'translateX(22px)'
                : 'translateX(0)'};
            }
        }
    }
    
`