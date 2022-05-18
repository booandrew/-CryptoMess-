import React, {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../../uikit';
import {Button} from '../../uikit/button';

interface INavbar {
    onMessageAddClick: Function;
}

export const Navbar: FC<INavbar> = ({onMessageAddClick}) => {
    const onMessageBtnClick = () => {
        onMessageAddClick();
    };

    return (
        <Container>
            <StyledButton variant="outline" onClick={onMessageBtnClick}>
                <Typography bold size="sm" inverted>
                    Message
                </Typography>
            </StyledButton>
        </Container>
    );
};

const StyledButton = styled(Button)`
    width: 120px;
    padding: ${({theme}) => `${theme.spacings(1)}px 0`};
`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    flex: 0.25;
`;
