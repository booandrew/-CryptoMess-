import format from 'date-fns/format';
import {Field, Form, Formik} from 'formik';
import React, {Dispatch, FC} from 'react';
import styled from 'styled-components';
import {IAddMessageFormValues, IMessageDto} from '../../models';
import {useUserData} from '../../queries/useUserDataQuery';
import {ModalWindow, Typography} from '../../uikit';
import {Button} from '../../uikit/button';
import {SERVER_DATETIME_FORMAT} from '../../utils/date';
import {Counter} from '../counter';

/**
 * Свойства компонента возвращающего форму добавления сообщения
 *
 * @property {boolean} isModalShown - Признак отображения модального окна
 * @property {Dispatch<React.SetStateAction<boolean>>} setIsModalShown - Изменение стейта отображения моделки
 * @property {(data: IMessageDto) => void} addMessage - Функция добавляющая новое сообщение
 */
interface IAddMessageForm {
    isModalShown: boolean;
    setIsModalShown: Dispatch<React.SetStateAction<boolean>>;
    addMessage: (data: IMessageDto) => void;
}

/** Форма добавления нового сообщения */
export const AddMessageForm: FC<IAddMessageForm> = ({isModalShown, addMessage, setIsModalShown}) => {
    const {data} = useUserData();
    const {userFormId = '', userImg = '', userName = ''} = data ?? {};

    /**
     * Обработчик сабмита формы
     *
     * @param {IAddMessageFormValues} param - Значения с формы
     */
    const handleSubmit = ({message}: IAddMessageFormValues) => {
        const date = format(new Date(), SERVER_DATETIME_FORMAT);
        const newMessage: IMessageDto = {
            createdAt: date,
            text: message,
            userFormId,
            userImg,
            userName,
            messageId: date,
        };
        addMessage(newMessage);
    };

    /** Хедер модалки */
    const header = (
        <Typography bold size="md">
            New message
        </Typography>
    );

    return (
        <ModalWindow header={header} show={isModalShown} onClose={() => setIsModalShown(false)}>
            <Formik<IAddMessageFormValues> initialValues={{message: ''}} enableReinitialize onSubmit={handleSubmit}>
                {({handleChange, dirty, values}) => {
                    return (
                        <Form>
                            <MessageContainer>
                                <StyledTextArea
                                    maxLength={200}
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    placeholder="what's new?"
                                    as="textarea"
                                />
                            </MessageContainer>
                            <ButtonCntWrapper>
                                <Counter characterCnt={values.message.length} />
                                <StyledButton type="submit" disabled={!dirty}>
                                    <Typography bold inverted>
                                        Send
                                    </Typography>
                                </StyledButton>
                            </ButtonCntWrapper>
                        </Form>
                    );
                }}
            </Formik>
        </ModalWindow>
    );
};

const StyledButton = styled(Button)`
    padding: ${({theme}) => `${theme.spacings(1)}px ${theme.spacings(4)}px`};
`;

const StyledTextArea = styled(Field)`
    padding: ${({theme}) => theme.spacings(2)}px;
    min-height: 140px;
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    overflow: auto;
`;

const MessageContainer = styled.div`
    padding: ${({theme}) => theme.spacings(2)}px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-bottom: 0.5px solid lightgray;
`;

const ButtonCntWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({theme}) => theme.spacings(2)}px;
`;
