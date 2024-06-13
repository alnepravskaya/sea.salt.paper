import { bd } from '../bd.js';
import { generateUsername } from 'unique-username-generator';

export const bdCreateUser = () => {
    const id = (Math.random()*100000000).toString().slice(1,8);
    const user = {id, name: generateUsername()}
    bd.users.push(user);

    return user;
}

export const bdChangeUserName = (id: string, newName: string) => {
    const user = bd.users.find((user) => user.id === id)
    user!.name = newName;

    return user;
}
