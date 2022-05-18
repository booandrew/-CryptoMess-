import {AxiosError, AxiosResponse} from 'axios';
import {useQuery} from 'react-query';
import {IUserDto} from '../models';
import {fakeService} from '../service/fake-service';

/**
 * Хук, позволяющий получить данные текущего авторизованного пользователя
 */
export const useUserData = () => {
    const {data, isError, isSuccess} = useQuery<AxiosResponse<IUserDto>, AxiosError>('userData', () => fakeService.getUserData(), {
        refetchOnWindowFocus: false,
    });

    return {data: data?.data, isSuccess, isError};
};
