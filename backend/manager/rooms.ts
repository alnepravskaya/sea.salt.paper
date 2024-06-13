import {
    bdChangeRoomName,
    bdChangeRoomState,
    bdCreateRoom,
    bdGetAllRooms, bdGetRoomUsers,
    bdJoinRoom, bdLeaveRoom,
    bdSetRoomPassword
} from '../bdManager/rooms.js';

export const getAllRooms = () => {
    const rooms = bdGetAllRooms();

    return rooms;
}

export const createRoom = () => {
    const room = bdCreateRoom();

    return room;
}

export const changeRoomName = (id: string, newName: string) => {
    const room = bdChangeRoomName(id, newName);

    return room;
}


export const joinRoom = (id: string, userId: string) => {
    const room = bdJoinRoom(id, userId)

    return room;
}

export const setRoomPassword = (id: string, password: string) => {
    const room = bdSetRoomPassword(id, password);

    return room;
}

export const changeRoomState = (id: string) => {
    const room = bdChangeRoomState(id);

    return room;
}

export const getRoomUsers = (id: string) => {
    const users = bdGetRoomUsers(id)
    return users;
}

export const leaveRoom = (id: string, userId: string) => {
    const room = bdLeaveRoom(id, userId)

    return room;
}
