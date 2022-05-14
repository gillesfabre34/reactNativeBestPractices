import { useNavigation, useRoute } from '@react-navigation/native';
import { FeaturesRoutes } from '../../router/routes/features.routes';
import { SecondViewRoute } from './PetForm.nav';
import { HomeNav } from '../Home/Home.nav';

/**
 * REMARKS :
 - This hook is the custom hook of the view SecondView. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const useSecondView = () => {
    const { id } = useRoute<SecondViewRoute>().params;
    const { navigate: navToHomeView } = useNavigation<HomeNav>();
    const message: string = id
        ? `This view was called with the id ${id}`
        : 'This view was called with no id';

    const goBackToHomeView = () => {
        navToHomeView(FeaturesRoutes.MyHomeView, { navigateFrom: 'Second view' });
    };

    return {
        goBackToHomeView,
        message,
    };
};
