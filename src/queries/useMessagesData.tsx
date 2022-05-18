import {AxiosError, AxiosResponse} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {useQuery, UseQueryOptions} from 'react-query';
import {toast} from 'react-toastify';
import {IMessageDto} from '../models';
import {fakeService} from '../service/fake-service';

const QUERY_KEY = 'MESSAGES_DATA_QUERY_KEY';

/**
 * Хук для получения данных по пользователю.
 */
export const useMessagesData = (options?: UseQueryOptions) => {
    const [messages, setMessages] = useState<IMessageDto[]>([]);

    const {data, isFetching, isIdle, isSuccess} = useQuery<AxiosResponse<IMessageDto[]>, AxiosError>([QUERY_KEY], () => fakeService.getMessages(), {
        refetchOnMount: false,
        onError: (err) => toast.error(err.message),
        enabled: options?.enabled,
    });

    const getUserMessages = useCallback(
        (userFormId: string | undefined) => {
            return messages.filter((message) => (userFormId ? message.userFormId === userFormId : true));
        },
        [messages]
    );

    useEffect(() => {
        data && isSuccess && setMessages(data.data);
    }, [data, isSuccess]);

    return {messagesData: messages, isFetching, isIdle, isSuccess, getUserMessages, setMessages};
};
