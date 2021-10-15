import styled from "styled-components";

export const StyledToggleSwitch = styled.div`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

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
            background-color: ${({theme}) => theme.colors.mono.grey1};
            transition: .3s;
            border-radius: 34px;
            &::before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: ${({theme}) => theme.colors.mono.light1};
                transition: .3s;
                border-radius: 50%;
                transform: translateX(26px);
            }
        }
    }
    
`