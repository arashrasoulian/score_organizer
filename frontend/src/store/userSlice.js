import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
    },
    clearCurrUser: (state) => {
      state.currUser = null;

    },
  },

});

export const { setCurrUser, clearCurrUser } = userSlice.actions;
export default userSlice.reducer;
console.log("redux" , initialState );
