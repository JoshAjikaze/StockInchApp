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
    isInventoryToggled: false,
    isCategoryToggled: false,
  },
  reducers: {
    modalToggle: (state) => {
      state.isToggled = !state.isToggled;
    },
    inventoryToggle: (state) => {
      state.isInventoryToggled = !state.isInventoryToggled;
    },
    categoryToggle: (state) => {
      state.isCategoryToggled= !state.isCategoryToggled;
    },
  },
});

export const { modalToggle, inventoryToggle, categoryToggle } = modalToggler.actions;