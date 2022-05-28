import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { petsSlice } from './slices/petsSlice';

const reducer = combineReducers({
    pets: petsSlice.reducer,
});

export const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof reducer>;
