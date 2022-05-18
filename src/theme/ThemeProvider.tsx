import React, {useContext} from 'react';
import {theme as defaultTheme} from '../theme/theme';
import {ThemeContext as StyledThemeContext, ThemeProvider as StyledThemeProvider, StyleSheetManager} from 'styled-components';
import {createContext} from 'react';

interface ITheme {
    theme: typeof defaultTheme;
}

export interface IThemeProviderProps {
    children?: React.ReactNode;
    theme: typeof defaultTheme;
}

const ThemeContext = createContext<ITheme>({
    theme: defaultTheme,
});

export const ThemeProvider = ({children, theme = defaultTheme}: IThemeProviderProps): JSX.Element => {
    return (
        <ThemeContext.Provider
            value={{
                theme: defaultTheme,
            }}
        >
            <StyledThemeProvider theme={theme}>
                <StyleSheetManager disableVendorPrefixes>{children || null}</StyleSheetManager>
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ITheme => {
    const theme = useContext(StyledThemeContext);
    if (theme === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return {theme};
};
