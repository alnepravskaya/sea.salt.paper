import { fetchers } from './fetchers';

export const createUser = async () => {
  return await fetchers.post('/createUser');
};

export const changeUserName = async (newName: string) => {
  return await fetchers.post('/changeUserName/:userId', { newName });
};
