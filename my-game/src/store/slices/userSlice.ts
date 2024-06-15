import { createSlice } from '@reduxjs/toolkit';
import { createUserThunk } from '../thunks/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      name: '',
      id: 123,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      // @ts-ignore
      // debugger;
      state.data = action.payload.payload.body;
    });
    /*  builder.addCase(fetchUsers.pending, (state, action) => {
          state.isLoading = true;
      });*/
    /*  builder.addCase(fetchUsers.rejected, (state, action) => {
         state.isLoading = false;
         state.error = action.error;
     });*/
  },
});

export const userReducer = userSlice.reducer;
