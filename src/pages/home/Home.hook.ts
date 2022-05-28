import { Routes } from '../../router/Routes';
import { Pet } from '../../shared/interfaces/Pet.interface';
import { PetFormNavigation } from '../petForm/PetForm.nav';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import i18n from '../../shared/i18n/i18n';
import { selectPets } from '../../store/slices/petsSlice';

export const useHome = () => {
    const pets: Pet[] = useSelector(selectPets);
    const { navigate: navToPetForm } = useNavigation<PetFormNavigation>();
    const title = i18n.t('Home.homePage');
    const buttonText = i18n.t('Home.addPet');
    const edit = (pet: Pet) => {
        navToPetForm(Routes.PetForm, { pet });
    };
    const navigateToPetForm = () => {
        navToPetForm(Routes.PetForm, {});
    };
    return {
        buttonText,
        edit,
        navigateToPetForm,
        pets,
        title,
    };
};
