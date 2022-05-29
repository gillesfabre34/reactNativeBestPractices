import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeNavigation } from '../home/Home.nav';
import { PetFormRoute } from './PetForm.nav';
import i18n from '../../shared/i18n/i18n';
import { Routes } from '../../router/Routes';
import { getPetSchema } from './PetForm.schema';

/**
 * REMARKS :
 - This hook is the custom hook of the view SecondView. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const usePetForm = () => {
    const { pet } = useRoute<PetFormRoute>().params;
    const { navigate: navToHomeView } = useNavigation<HomeNavigation>();
    const title = pet ? i18n.t('PetForm.updateThePet') : i18n.t('PetForm.addANewPet');
    const submitButtonText = pet ? i18n.t('PetForm.update') : i18n.t('PetForm.add');
    const name = i18n.t('PetForm.name');
    const age = i18n.t('PetForm.age');
    const initialValues = pet || { age: '', name: '' };
    const petFormSchema = getPetSchema();

    const onSubmit = () => {
        // do some stuff
        navToHomeView(Routes.Home);
    };

    return {
        age,
        initialValues,
        name,
        onSubmit,
        petFormSchema,
        submitButtonText,
        title,
    };
};
