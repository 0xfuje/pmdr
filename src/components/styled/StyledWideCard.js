import styled from 'styled-components';

export const StyledWideCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 4rem;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main.dark};
    border: 2px dashed ${({theme}) => theme.colors.mono.grey1};
    border-radius: 0.2rem;
    margin-bottom: 0.625rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${({theme}) => theme.colors.main.normal};
        border: 2px dashed ${({theme}) => theme.colors.mono.light2};
    }
    .WideCard {
        &-plusIcon {
        height: 1.5rem;
        }
        &-text {
            font-size: ${({theme}) => theme.fontSizes.small};
            color: ${({theme}) => theme.colors.mono.light2};
        }
       
    }
    
`;