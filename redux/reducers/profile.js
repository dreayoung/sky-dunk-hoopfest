import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: '',
    cart: null,
    token: false,
  },
  reducers: {
    SET_NAME(state, action) {
      state.user = action.payload;
    },
    SET_CART(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { SET_NAME, SET_CART } = profileSlice.actions;
export default profileSlice.reducer;
