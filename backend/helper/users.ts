import { bd } from "../bd.js";

export const createUser = () => {
    const id = (Math.random()*100000000).toString().slice(1,8);
    const user = {id, name: "New User"}
    bd.users.push(user);

    return user;
}

export const changeUserName = (id: string, newName: string) => {
    const user = bd.users.find((user) => user.id === id)
    user!.name = newName;

    return user;
}

