import axios from "axios";

/**
 * Модель параметров фабрики по созданию функций для осуществления запросов к серверу.
 */
 interface IRequestMethodFactoryParams {
    url: string;
    data?: object;
    queryParams?: object | string;
}


const requestMethodFactory = async<TResponse>(method: 'post' | 'get' | 'put' | 'delete', params: IRequestMethodFactoryParams) => {
    return await axios[method]<TResponse>(params.url, {params: params.queryParams, data: params.data});
};


/**
 * Производит GET-запрос по указанному URL.
 *
 * @param {string} url URL.
 * @param {string | object} [queryParams] Параметры запроса.
 */
 export const GET = <TResponse = any>(url: string, queryParams?: object | string) => requestMethodFactory<TResponse>('get', {url, queryParams});

 /**
  * Производит DELETE-запрос по указанному URL.
  *
  * @param {string} url URL.
  * @param {string | object} [queryParams] Параметры запроса.
  * @param {object} [data] Данные для передачи в теле запроса.
  */
 export const DELETE = <TResponse = any>(url: string, queryParams?: object | string, data?: object) =>
     requestMethodFactory<TResponse>('delete', {url, data, queryParams});
 
 /**
  * Произвести POST-запрос к серверу по указанному URL.
  *
  * @param {string} url URL.
  * @param {object} [data] Данные для передачи в теле запроса.
  * @param {object} [queryParams] Данные для передачи в строке запроса.
  */
 export const POST = <TResponse = any>(url: string, data?: object, queryParams?: object) =>
     requestMethodFactory<TResponse>('post', {url, data, queryParams});
 
 /**
  * Произвести PUT-запрос к серверу по указанному URL.
  *
  * @param {string} url URL.
  * @param {object} [data] Данные для передачи в теле запроса.
  * @param {object} [queryParams] Данные для передачи в строке запроса.
  */
 export const PUT = <TResponse = any>(url: string, data?: object, queryParams?: object) =>
     requestMethodFactory<TResponse>('put', {url, data, queryParams});