import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useTheme} from '../../theme';
import {Typography} from '../../uikit';

interface ICounterProps {
    characterCnt: number;
}

export const Counter: FC<ICounterProps> = ({characterCnt}) => {
    const {theme} = useTheme();
    return (
        <Container>
            <Typography bold color={theme.palette.common.colors.gray.g500}>{`< ${characterCnt} />`}</Typography>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
`;
