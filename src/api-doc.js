/**
 * GET
 *
 * Получение сообщений - api/messages
 *
 * //in
 * @property {string} [text] - текст для фильтрации
 * @property {string} [datetime] - дана-время для фильтрации
 * @property {string} [userFormId] - фильтрация по пользователю / получение сообщений для станицы пользователей
 *
 *
 * //out
 * @property {string} text - Текст сообщения
 * @property {string} messageId - ID сообщения
 * @property {string} createdAt - Дата создания сообщения
 * @property {string} userFormId - ID автора сообщения
 * @property {string} userName - Имя автора
 * @property {string} [userImg] - Ссылка на аватар
 */

/**
 * POST
 *
 * Регистрация - api/users
 *
 * //in
 * @property {string} email
 * @property {string} userName
 * @property {string} userFormId
 * @property {string} password
 *
 * //out
 * @property {string} email - имейл
 * @property {string} userFormId - Никнейм
 * @property {string} userName - Имя пользователя
 * @property {string} token -jwt
 *
 *
 * Логин - api/login
 * //in
 * @property {string} email
 * @property {string} password
 *
 * //out
 * @property {string} email - имейл
 * @property {string} userFormId - Никнейм
 * @property {string} userName - Имя пользователя
 * @property {string} token -jwt
 *
 * Изменение юзеринфо - api/user
 * //in
 * @property {string} [description] - Описание
 * @property {string} [userName] - Имя пользователя
 * @property {file} [userImg] - Файл аватар
 *
 *  Создание сообщения - api/messages
 * //in
 * @property {string} text
 */

/**
 * DELETE
 * Удаление сообщения api/messages
 *
 * //in
 * @property {stirng} messageId - ID cообщения
 *
 */
