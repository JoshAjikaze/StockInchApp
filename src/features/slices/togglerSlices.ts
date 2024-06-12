import { createSlice } from '@reduxjs/toolkit';

export const categoryToggler = createSlice({
  name: 'categoryToggler',
  initialState: {
    isToggled: false,
  },
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggle } = categoryToggler.actions;