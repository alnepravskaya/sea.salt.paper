import { bd } from '../bd.js';
import { RoomState } from '../types/rooms.js';
import { nouns, uniqueUsernameGenerator } from 'unique-username-generator';

export const bdGetAllRooms =  () => {
    const { rooms } = bd;

    return rooms;
}

export const bdCreateRoom =  () => {
    const id = (Math.random() * 100000000).toString().slice(1, 8);
    const roomName: string = uniqueUsernameGenerator({ dictionaries: [ nouns ] });
    const room = { id, name: roomName, users: [], state: RoomState.readyToStart }
    bd.rooms.push(room);

    return room;
}

export const bdChangeRoomName =  (id: string, newName: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.name = newName;

    return room;
}


export const bdJoinRoom=  (id: string, userId: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.users.push(userId);

    return room;
}

export const bdSetRoomPassword =  (id: string, password: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    console.log(room, id, password);
    room!.password = password;

    return room;
}

export const bdChangeRoomState = (id: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.state = RoomState.inProgress;

    return room;
}

export const bdGetRoomUsers = (id: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    const users = room!.users || [];

    return users;
}


export const bdLeaveRoom = (id: string, userId: string) => {
    const room = bd.rooms.find((room) => room.id === id)
    room!.users = room!.users.filter(user => user !== userId);

    return room;
}

