import React, {useState} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {AddMessageForm, AppHeader, ContentLayout, MessagesList, Navbar, NotFound, UserInfo} from './components';
import GlobalStyle from './theme/globalStyles';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import {IMessageDto} from './models';
import {useMessagesData} from './queries/useMessagesData';
import {useMessageFilter} from './hooks';

const App = () => {
    const [isModalShown, setIsModalShown] = useState(false);

    const {messagesData, getUserMessages, setMessages} = useMessagesData();

    const {handleFilterApply, filteredData} = useMessageFilter(messagesData);

    /**
     * Обработчик отправки сообщения
     *
     * @param {IMessageDto} data - Отправляемые данные
     */
    const handleAddMessage = (data: IMessageDto) => {
        const newList = messagesData.concat(data);
        setMessages(newList);
        setIsModalShown(false);
    };

    /** Обработчик открытия модального окна */
    const handleModalShow = () => {
        setIsModalShown(true);
    };

    return (
        <>
            <Router>
                <GlobalStyle />
                <AppHeader onFilterSubmit={handleFilterApply} />
                <ContentLayout>
                    <Container>
                        <Navbar onMessageAddClick={handleModalShow} />
                        <AddMessageForm addMessage={handleAddMessage} isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
                        <Routes>
                            <Route path="/" element={<MessagesList messagesData={filteredData} />} />
                            <Route path="/user/:userFormId" element={<UserInfo getUserMessages={getUserMessages} />} />
                            <Route path="/404" element={<NotFound />} />
                        </Routes>
                    </Container>
                </ContentLayout>
                <ToastContainer position="bottom-right" hideProgressBar autoClose={2000} />
            </Router>
        </>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    height: 100%;
    padding-top: ${({theme}) => theme.spacings(6)}px;
`;
