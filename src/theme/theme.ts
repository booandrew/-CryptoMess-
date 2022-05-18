import {DefaultTheme} from 'styled-components';

import {colors} from './colors';
import {commonProps} from './commonProps';
import {dimensions} from './dimensions';

declare module 'styled-components' {
    export interface DefaultTheme {
        dimensions: {
            input: {
                height: number;
            };
            button: {
                height: number;
            };
            page: {
                header: {
                    height: number;
                };
            };
            layout: {
                width: number
            }
        };
        zIndex: {
            dropdown: number;
            navbar: number;
            appHeader: number;
            modal: number;
        };
        typography: {
            size: {
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
                p1: number;
                p2: number;
                p3: number;
                p4: number;
                p5: number;
            };
            weight: {
                bold: number;
                medium: number;
                regular: number;
                light: number;
            };
            lineHeights: {
                xs: number;
                s: number;
            };
        };
        spacings: {
            (modifier?: number): number;
        };
        palette: {
            type: string;
            common: {
                colors: {
                    black: string;
                    white: string;
                    blackAlt: string;
                    blue: string;
                    dirtyBlue: string;
                    paleBlue: string;
                    green: string;
                    darkGreen: string;
                    red: string;
                    purple: string;
                    darkRed: string;
                    retailBlue: string;
                    lightBlue: string;
                    orange: string;
                    bodyBg: string;
                    grayMain: string;
                    strokeGray: string;
                    darkGray: string;
                    lightGray: string;
                    inputGray: string;
                    shadowGray: string;
                    gray: {
                        g50: string;
                        g100: string;
                        g200: string;
                        g300: string;
                        g400: string;
                        g500: string;
                        g600: string;
                        g700: string;
                        g800: string;
                        g900: string;
                    };
                };
            };
            background: {
                default: string;
                common: string;
                commonDim: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                hint: string;
                icon: string;
                contrastText: string;
            };
            json: {
                main: string;
                error: string;
                key: string;
                string: string;
                value: string;
                boolean: string;
            };
        };
        shadows: {
            none: string;
            elevation1: string;
            elevation2: string;
            elevation3: string;
            elevation4: string;
            elevation5: string;
            elevation6: string;
        };
    }
}

export const theme: DefaultTheme = {
    ...commonProps,
    dimensions,
    palette: {
        common: {colors},
        type: 'light',
        background: {
            default: colors.white,
            common: '-webkit-linear-gradient(90deg, hsl(270, 60%, 65%), hsl(-15, 64%, 60%))',
            commonDim: '-webkit-linear-gradient(90deg, hsl(270, 60%, 65%), hsl(-40, 64%, 60%))'
        },
        text: {
            primary: colors.userFriendlyBlack,
            secondary: 'rgba(255, 255, 255, 0.1)',
            disabled: 'rgba(255, 255, 255, 0.2)',
            hint: 'rgba(255, 255, 255, 0.3)',
            icon: 'rgba(255, 255, 255, 0.4)',
            contrastText: colors.gray.g200,
        },
        json: {
            main: 'none',
            error: colors.black,
            key: colors.dirtyBlue,
            string: colors.darkRed,
            value: colors.darkGreen,
            boolean: colors.blue,
        },
    },
};
