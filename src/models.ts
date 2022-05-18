
/**
 * Модель сообщения
 * 
 * @property {string} text - Текст сообщения
 * @property {string} messageId - ID сообщения
 * @property {string} createdAt - Дата создания сообщения
 * @property {string} userFormId - ID автора сообщения
 * @property {string} userName - Имя автора
 * @property {string} userImg - Ссылка на аватар
 */
export interface IMessageDto {
    text: string;
    messageId: string;
    createdAt: string;
    userFormId: string;
    userName: string;
    userImg: string;
}

/**
 * Модель response на запрос за сообщениями
 */
export type IMessagesDto = IMessageDto[]

/**
 * Модель response на запрос за пользователем
 * 
 * @property {string} createdAt - Дата регистрации
 * @property {string} userFormId - ID пользователя
 * @property {string} userName - Имя пользователя
 * @property {string} userImg - Ссылка на аватар пользователя
 * @property {string} description - Описание
 */
export interface IUserDto {
    createdAt: string;
    userFormId: string;
    userName: string;
    userImg: string;
    description: string;
}


export interface IAddMessageFormValues {
    message: string;
}