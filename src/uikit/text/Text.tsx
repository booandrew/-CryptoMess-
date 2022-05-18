import React from 'react';
import styled from 'styled-components';

export type TTextAlign = 'center' | 'right' | 'justify' | 'left';
export type TTextSize = 'xl' | 'lg2' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export interface ITextProps {
    caption?: boolean;
    inverted?: boolean;
    reset?: boolean;
    size?: TTextSize | undefined;
    align?: TTextAlign;
    children: React.ReactElement | React.ReactNode;
}

interface IWrapperProps {
    caption?: boolean;
    inverted?: boolean;
    reset?: boolean;
    size?: TTextSize | undefined;
    align?: TTextAlign;
}

const calculateFS = (size: TTextSize | undefined) => {
    return size === 'xl'
        ? 32
        : size === 'lg2'
        ? 22
        : size === 'lg'
        ? 17
        : size === 'md'
        ? 15
        : size === 'sm'
        ? 13
        : size === 'xs'
        ? 12
        : size === 'xxs'
        ? 11
        : 10;
};

const calculateLH = (size: TTextSize | undefined, caption?: boolean) => {
    return size === 'xl' ? 42 : size === 'lg2' ? 26 : size === 'lg' ? 24 : size === 'md' ? 20 : size === 'sm';
};

export const Text = ({caption = false, children, inverted = false, reset = false, size = 'md', ...rest}: ITextProps) => {
    return (
        <Wrapper caption={caption} size={size} reset={reset} inverted={inverted} {...rest}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.span<IWrapperProps>`
    font-size: ${({size}) => calculateFS(size)}px;
    line-height: ${({caption, reset, size}) => (reset ? '1em' : `${calculateLH(size, caption)}px`)};
    margin-top: ${({theme}) => theme.spacings()};
    margin-bottom: ${({theme}) => theme.spacings()};
    font-family: sans-serif;
    text-align: ${({align}) => align ?? 'left'};
`;
