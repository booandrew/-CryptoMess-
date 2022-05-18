import {useEffect, useState} from 'react';
import {IMessagesDto} from '../models';

/**
 * Модель данных фильтра.
 *
 * @prop {string} value Значение фильтра.
 */
export type TFilterValue = {
    value: string;
};

/**
 *  Обрабатываемая модель фильтра для таблиц UW.
 *
 * @prop {TFilterValue} key Связка имя фильтра - велью.
 */
export type TFilter = {
    [key: string]: TFilterValue;
};

export const useMessageFilter = (messagesData: IMessagesDto) => {
    const [filter, setFilter] = useState<TFilter>({});
    const [filteredData, setFilteredData] = useState<IMessagesDto>([]);

    const handleFilterApply = (appliedFilters: TFilter) => {
        setFilter((prev) => ({
            ...prev,
            ...appliedFilters,
        }));
    };

    const handleFilterReset = () => {
        setFilter({});
    };

    const getFilteredTableData = () => {
        return Object.keys(filter).reduce(
            (acc, filterName) => {
                const filterValue: string = filter[filterName].value.toLowerCase();

                return acc.filter((message) => {
                    const textFilterValue = message.text.toLowerCase();
                    const userFilterValue = message.userName.toLowerCase();
                    if (textFilterValue.includes(filterValue) || userFilterValue.includes(filterValue)) {
                        return true;
                    }
                    return false;
                });
            },
            [...messagesData]
        );
    };

    /**
     * При изменении исходных данных таблицы или изменении фильтров производим фильтрацию.
     */
    useEffect(() => {
        if (messagesData?.length) {
            Object.values(filter).length ? setFilteredData(getFilteredTableData()) : setFilteredData(messagesData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, messagesData]);

    useEffect(() => {
        setFilteredData(messagesData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        handleFilterApply,
        handleFilterReset,
        filteredData,
    };
};
