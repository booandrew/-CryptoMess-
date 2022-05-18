import React, {FC, useMemo} from 'react';
import styled from 'styled-components';
import {IMessageDto} from '../../models';
import {Typography} from '../../uikit';
import {Message} from '../message/Message';

/**
 * Свойства компонента
 *
 * @property {IMessageDto[] | undefined}  messagesData - Данные по сообщениям
 */
interface IMessageListProps {
    messagesData: IMessageDto[] | undefined;
}

/**
 * Список сообщений
 */
export const MessagesList: FC<IMessageListProps> = ({messagesData}) => {
    const messages = useMemo(() => messagesData?.map((message) => <Message key={message.messageId} data={message} />), [messagesData]);

    const haveMessages = !!messagesData?.length;

    // TODO: добавить react-window, когда либы подгонят под 18 версию реакт
    return (
        <Container>
            {haveMessages ? (
                messages
            ) : (
                <Typography bold size="lg2">
                    No data
                </Typography>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: min-content;
    word-break: break-all;
    flex: 0.5;
`;
