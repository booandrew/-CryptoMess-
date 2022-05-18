import React, {FC} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';
import {IMessageDto} from '../../models';
import {useTheme} from '../../theme';
import {Avatar, Typography} from '../../uikit';
import {formatDatetime} from '../../utils/date';

/**
 * Свойства компонента сообщения
 *
 * @property {IMessageDto} data - Данные по сообщению
 */
interface IMessageFC {
    data: IMessageDto;
}

/** Компонент возвращающий сообщение */
export const Message: FC<IMessageFC> = ({data}) => {
    const {userImg, userName, userFormId, createdAt, text} = data;
    const {theme} = useTheme();
    const navigate = useNavigate();

    const handleOnUserClick = () => {
        navigate(`/user/${userFormId}`);
    };
    return (
        <Container>
            <UserInfoContainer onClick={handleOnUserClick}>
                <UserPicContainer>
                    <Avatar size="s" src={userImg} />
                </UserPicContainer>

                <StyledUserNameContainter>
                    <StyledTypography bold>{userName}</StyledTypography>
                    <StyledTypography color={theme.palette.common.colors.gray.g700} size="sm">
                        {userFormId}
                    </StyledTypography>
                    <StyledTypography color={theme.palette.common.colors.gray.g700} size="sm">
                        {formatDatetime(createdAt)}
                    </StyledTypography>
                </StyledUserNameContainter>
            </UserInfoContainer>
            <TextContainer>
                <Typography>{text}</Typography>
            </TextContainer>
        </Container>
    );
};

const StyledTypography = styled(Typography)`
    margin-right: ${({theme}) => theme.spacings(0.5)}px;
`;

const UserPicContainer = styled.div`
    position: absolute;
    left: 0;
`;

const TextContainer = styled.div`
    padding-left: 65px;
`;

const UserInfoContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    padding-left: 65px;
    cursor: pointer;
`;

const StyledUserNameContainter = styled.div`
    display: flex;
`;

const Container = styled.div`
    flex: 0.5;
    padding-bottom: ${({theme}) => theme.spacings(4)}px;
`;
