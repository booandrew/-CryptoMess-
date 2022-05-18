import React, {FC} from 'react';
import {Spinner as BsSpinner, SpinnerProps} from 'react-bootstrap';
import styled from 'styled-components';

/**
 * Модель свойств компонента.
 */
export type TSpinnerProps = Pick<SpinnerProps, 'size'>;

/**
 * Spinner
 */
export const Spinner: FC<TSpinnerProps> = ({size}) => {
    return (
        <Container>
            <BorderSpinner animation="border" size={size} />
        </Container>
    );
};
const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const BorderSpinner = styled(BsSpinner)<TSpinnerProps>`
    border: ${({size}) => (size === 'sm' ? 2 : 3)}px solid;
    border-right: ${({size}) => (size === 'sm' ? 2 : 3)}px solid transparent;
    color: ${({theme}) => theme.palette.background.common};
`;
