import { GET } from "../http";

export const fakeService = {
    /**
    * Получить время в регионе проживания.
    */
    getUsersInfo: () => GET<any>('../users.json'),

    /**
    * Получить время в регионе проживания.
    */
    getUserData: () => GET<any>('../currentUser.json'),
    
    /**
    * Получить время в регионе проживания.
    */
    getMessages: () => GET<any>('../messages.json'),
}