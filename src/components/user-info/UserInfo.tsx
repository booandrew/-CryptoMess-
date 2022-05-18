import React, {FC} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {IMessageDto} from '../../models';
import {useUserData} from '../../queries/useUserData';
import {useTheme} from '../../theme';
import {ArrowLeft, Avatar, Typography} from '../../uikit';
import {MessagesList} from '../messages-list';

/**
 * Свойства компонента возвращающий страницу юзера
 *
 * @property {Function} getUserMessages - Функция возвращающая сообщения по конкретному юзеру
 */
interface IUserInfoProps {
    getUserMessages: (userFormId: string | undefined) => IMessageDto[];
}

/** Компонент возвращающий страницу юзера с его сообщениями и информацией */
export const UserInfo: FC<IUserInfoProps> = ({getUserMessages}) => {
    const {theme} = useTheme();

    const {userFormId} = useParams();

    const messagesData = getUserMessages(userFormId);

    const {data} = useUserData(userFormId ?? '');

    const {description, userFormId: currentUserFormId, userImg, userName} = data ?? {};

    return (
        <Container>
            <>
                <Header>
                    <Link to={'/'}>
                        <BackButton>
                            <ArrowLeft />
                        </BackButton>
                    </Link>
                    <HeaderUserNameContainer>
                        <Typography bold>Feed</Typography>
                    </HeaderUserNameContainer>
                </Header>
                <Info>
                    <div>
                        <Avatar src={userImg} />
                    </div>
                    <Description>
                        <Typography bold size="lg">
                            {userName}
                        </Typography>
                        <Typography color={theme.palette.common.colors.gray.g700} size="md">
                            {currentUserFormId}
                        </Typography>
                        <Typography size="md">{description}</Typography>
                    </Description>
                </Info>
                <MessagesList messagesData={messagesData} />
            </>
        </Container>
    );
};

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;
const Info = styled.div`
    display: flex;
    margin-bottom: ${({theme}) => theme.spacings(6)}px;
`;

const HeaderUserNameContainer = styled.div``;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({theme}) => theme.spacings(6)}px;
`;
const Container = styled.div`
    flex: 0.5;
`;

const BackButton = styled.div`
    cursor: pointer;

    border-radius: 20px;
    transition: 100ms;
    :hover {
        color: ${({theme}) => theme.palette.common.colors.purple};
    }
`;
