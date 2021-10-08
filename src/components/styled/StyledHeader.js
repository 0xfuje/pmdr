import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: ${({theme}) => theme.width.header};
    margin: 2rem auto;
    color: ${({theme}) => theme.colors.font.light};
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
        }
        &-list-item {
        list-style-type: none;
        a {
            color: ${({theme}) => theme.colors.font.light};
            text-decoration: none;
        }
    }
    }
    
`;