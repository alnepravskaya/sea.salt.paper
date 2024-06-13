import { bd } from "../bd.js";
import { bdChangeUserName, bdCreateUser } from '../bdManager/users.js';

export const createUser = () => {
    const user = bdCreateUser();

    return user;
}

export const changeUserName = (id: string, newName: string) => {
    const user = bdChangeUserName(id, newName)

    return user;
}

