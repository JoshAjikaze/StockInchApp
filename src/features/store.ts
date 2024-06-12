import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from './api';
import { categoryToggler, modalToggler } from './slices/togglerSlices';
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        categoryToggler: categoryToggler.reducer,
        modalToggler: modalToggler.reducer,
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
