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

export const modalToggler = createSlice({
  name: 'modalToggler',
  initialState: {
    isToggled: false,
  },
  reducers: {
    modalToggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { modalToggle } = modalToggler.actions;