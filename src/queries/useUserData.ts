import { IUserDto } from './../models';
import { AxiosError, AxiosResponse } from 'axios';
import {useQuery} from 'react-query';
import { toast } from 'react-toastify';
import { fakeService } from '../service/fake-service';

const QUERY_KEY = 'USER_DATA_QUERY_KEY';

/**
 * Хук для получения данных по пользователю.
 */
export const useUserData = (userFormId: string) => {
    const {data, isFetching, isSuccess, isIdle} = useQuery<AxiosResponse<IUserDto[]>, AxiosError>([QUERY_KEY, userFormId], () => fakeService.getUsersInfo(), {
        refetchOnMount: false,
        onError: (err) => toast.error(err.message)
    });


    const currentUser = data?.data.find((user) => user.userFormId === userFormId)

    return {data: currentUser, isFetching, isSuccess, isIdle}
};

