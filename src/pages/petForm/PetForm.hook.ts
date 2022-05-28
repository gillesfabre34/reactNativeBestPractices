import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeNavigation } from '../home/Home.nav';
import { PetFormRoute } from './PetForm.nav';
import i18n from '../../shared/i18n/i18n';

/**
 * REMARKS :
 - This hook is the custom hook of the view SecondView. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const usePetForm = () => {
    const { pet } = useRoute<PetFormRoute>().params;
    const { navigate: navToHomeView } = useNavigation<HomeNavigation>();
    const title: string = pet ? i18n.t('PetForm.UpdateThePet') : i18n.t('PetForm.AddANewPet');

    const goBackToHomeView = () => {
        navToHomeView(FeaturesRoutes.MyHomeView, { navigateFrom: 'Second view' });
    };

    return {
        goBackToHomeView,
        title,
    };
};
