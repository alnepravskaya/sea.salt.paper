import { fetchers } from './fetchers';
import md5 from 'md5';

export const getAllAvailableRooms = async () => {
  return await fetchers.get('/getAllRooms');
};

export const createRoom = async () => {
  return await fetchers.post('/createRoom');
};

export const changeRoomName = async (newName: string) => {
  return await fetchers.post('/changeRoomName/:roomId', { newName });
};

export const joinRoom = async (userId: string) => {
  return await fetchers.post('/joinRoom/:roomId', { userId });
};

export const setRoomPassword = async (password: string) => {
  return await fetchers.post('/setRoomPassword/:roomId', {
    password: md5(password),
  });
};

export const startGame = async () => {
  return await fetchers.post('/startGame/:roomId');
};

export const getRoomUsers = async () => {
  return await fetchers.post('/getRoomUsers/:roomId');
};

export const leaveRoom = async (newName: string) => {
  return await fetchers.post('/leaveRoom/:roomId');
};
