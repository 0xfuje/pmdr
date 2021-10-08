import React from "react";
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

const theme = {
    colors: {
        main: {
            light: colors.red.light,
            normal: colors.red.normal,
            dark: colors.red.dark,
        },
        font: {
            light: colors.monochrome.light1,
            lightGrey: colors.monochrome.light2,
            grey: colors.monochrome.grey3,
            darkGrey: colors.monochrome.grey4,
            dark: colors.monochrome.dark1,
        }
    },
    fonts: ['Titillium Web', 'sans-serif'],
    fontSizes: {
        tiny: '0.75rem',
        small: '0.875rem',
        medium: '1.125rem',
        large: '1.5rem',
        giant: '6rem'
    },
    width: {
        container: '460px',
        header: '960px'
    },
    button: {
        padding: '0.5rem 1rem',
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;