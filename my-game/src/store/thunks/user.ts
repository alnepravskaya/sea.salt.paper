import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser } from '../../services/user';

const createUserThunk = createAsyncThunk('users/add', async () => {
  const response = await createUser();

  return response;
});

export { createUserThunk };
