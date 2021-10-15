import styled from "styled-components";

export const StyledTimer = styled.div`
    margin: 3rem auto 0;
    padding: 1.5rem 2rem;
    background-color: ${({theme}) => theme.colors.main.light};
    border-radius: 0.25rem;
    .Timer {
        &-buttons {
            display: flex;
            justify-content: center;
            gap: 0.2rem;
        }
        &-settings {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }
        &-controll {
            position: relative;
            display: flex;
            justify-content: center;
        }
    }
`