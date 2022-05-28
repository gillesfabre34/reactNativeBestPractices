import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Pet } from '../../shared/interfaces/Pet.interface';

export const petsSlice = createSlice({
    name: 'pets',
    initialState: [] as Pet[],
    reducers: {},
});

export const selectPets = ({ pets }: RootState): Pet[] => pets;
