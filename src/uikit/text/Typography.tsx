import React from 'react';
import {useTheme} from '../../theme';

import {Bold} from './Bold';
import {Color} from './Color';
import {Text, TTextAlign, TTextSize} from './Text';

export interface ITypographyProps {
    color?: string;
    bold?: boolean;
    caption?: boolean;
    inverted?: boolean;
    reset?: boolean;
    size?: TTextSize | undefined;
    align?: TTextAlign;
    children: React.ReactElement | React.ReactNode;
    title?: string;
}

export const Typography = ({bold = false, children, color, inverted, ...rest}: ITypographyProps) => {
    const {theme} = useTheme();
    return (
        <Text {...rest}>
            <Color color={`${inverted ? theme.palette.common.colors.white : color || theme.palette.text.primary}`}>
                <Bold bold={bold}>{children}</Bold>
            </Color>
        </Text>
    );
};
