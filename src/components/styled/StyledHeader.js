import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: ${({theme}) => theme.width.header};
    margin: 2rem auto;
    color: ${({theme}) => theme.colors.mono.light1};
    display: flex;
    justify-content: space-between;
    .Header {
        &-list {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
        &-logo {
            font-size: ${({theme}) => theme.fontSizes.large};
            font-weight: ${({theme}) => theme.fontWeights.medium};
        }
        &-list-item {
        list-style-type: none;
        a {
            color: ${({theme}) => theme.colors.mono.light1};
            text-decoration: none;
        }
    }
    }
    
`;