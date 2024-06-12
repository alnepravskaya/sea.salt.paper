import { bd } from "../bd.js";

export const getAllRooms = () => {
    const {rooms} = bd;

    return rooms;
}

export const createRoom = () => {
    const id = (Math.random()*100000000).toString().slice(1,8);
    const room = {id, name: "New Room", users: [], state: 0}
    bd.rooms.push(room);

    return room;
}

export const changeRoomName = (id: string, newName: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.name = newName;

    return room;
}


export const joinRoom = (id: string, userId: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.users.push(userId);

    return room;
}

export const setRoomPassword = (id: string, password: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    console.log(room, id, password);
    room!.password = password;

    return room;
}

export const changeRoomState = (id: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.state = 1;

    return room;
}
