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
    isAddItemToggled: false,
    isEditItemToggled: false,
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
    addItemToggle: (state) => {
      state.isAddItemToggled= !state.isAddItemToggled;
    },
    editItemToggle: (state) => {
      state.isEditItemToggled= !state.isEditItemToggled;
    },
  },
});

export const { modalToggle, inventoryToggle, categoryToggle, searchToggle, addItemToggle, editItemToggle } = modalToggler.actions;