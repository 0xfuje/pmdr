import react, {createContext, useState} from "react";
import { ThemeProvider } from "styled-components";



const colors = {
    red: {
        light: '#AA4040',
        normal: '#813737',
        dark: "#6B3333",
    },
    green: {
        light: '#469D89',
        normal: '#34726B',
        dark: '#155454'
    },
    blue: {
        light: '#457B9D',
        normal: '#395D74',
        dark: '#1D3557'
    },
    monochrome: {
        light1: '#E9ECEF',
        light2: '#CED4DA',
        grey1: '#ADB5BD',
        grey2: '#8B9299',
        grey3: '#6C757D',
        grey4: '#495057',
        dark1: '#343A40',
        dark2: '#212529',
    },
    
}

export const MyThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
    const changeTheme = (col = 'red') => {
        return {
        colors: {
            main: {
                active: `${col}`,
                light: colors[col].light,
                normal: colors[col].normal,
                dark: colors[col].dark,
            },
            mono: {
                light1: '#E9ECEF',
                light2: '#CED4DA',
                grey1: '#ADB5BD',
                grey2: '#8B9299',
                grey3: '#6C757D',
                grey4: '#495057',
                dark1: '#343A40',
                dark2: '#212529',
            },
            
        },
        fonts: ['Titillium Web', 'sans-serif'],
        fontSizes: {
            tiny: '0.75rem',
            small: '0.875rem',
            medium: '1rem',
            large: '1.25rem',
            giant: '6rem'
        },
        fontWeights: {
            normal: 400,
            medium: 600
        },
        width: {
            container: '460px',
            header: '960px'
        },
        }
    }
    const [theme, setTheme] = useState(changeTheme('red'));
    return (
        <MyThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MyThemeContext.Provider>
    );
}
