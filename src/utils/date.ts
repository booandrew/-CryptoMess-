import format from "date-fns/format";
import isValid from "date-fns/isValid";
import parseISO from "date-fns/parseISO";

/**
 * Формат даты (день, число, год) и времени (часы, минуты, секунды) для отображения.
 */
 export const FRONTEND_DATETIME_FORMAT = 'dd.MM.yyyy HH:mm:ss';

 /**
 * Серверный форматы даты и времени.
 */
export const SERVER_DATETIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";

/**
 * Форматирует дату и время для отображения на формах.
 *
 * @param {string | undefined} datetime Дата и время для форматирования.
 * @param {string | undefined} datetimeFormat Формат даты и времени для форматирования.
 */
 export const formatDatetime = (datetime: string, datetimeFormat: string = FRONTEND_DATETIME_FORMAT): string => {
    const parsedData = parseISO(datetime);

    return isValid(parsedData) ? format(parsedData, datetimeFormat) : '';
};