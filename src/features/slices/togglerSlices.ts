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
    isSearchToggled: false,
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
    searchToggle: (state) => {
      state.isSearchToggled= !state.isSearchToggled;
    },
  },
});

export const { modalToggle, inventoryToggle, categoryToggle, searchToggle } = modalToggler.actions;