import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeViewRoute } from './Home.nav';
import { FeaturesRoutes } from '../../router/routes/features.routes';
import { PetFormNav } from '../PetForm/PetForm.nav';

/**
 * REMARKS :
 - This hook is the custom hook of the view HomeView. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const useHomeView = () => {
    // The useRoute() hook must be typed with the Route type corresponding to the view
    // => here, navigateFrom is interpreted as a string by TypeScript
    // => no bug caused by a false interpretation of the type of the param (ex : string instead of string | undefined)
    const { navigateFrom } = useRoute<HomeViewRoute>().params;

    // The useNavigation() hook must be typed with the Navigation type corresponding to the view called by the navigation
    // => it will not be possible to have a bug caused by a param not waited by the page to navigate to
    const { navigate: navToSecondView } = useNavigation<PetFormNav>();

    const [eventMessage, setEventMessage] = useState<string>('');
    const [idToSendToOtherPage, setIdToSendToOtherPage] = useState<number | undefined>(undefined);

    const firstComponentTitle = 'First component';
    const secondComponentTitle = 'Second component';
    const ids: number[] = [2, 3, 7];

    // The value of the message displayed in the view is calculated in the .hook file
    const message: string = navigateFrom || 'There is no message from other page';

    const handlePressOnFirstComponent = () => {
        setEventMessage('You pressed on the first component');
        setIdToSendToOtherPage(0);
    };

    const handlePressOnSecondComponent = (id: number) => {
        setEventMessage(`You pressed on the second component and pressed on the id ${id}.`);
        setIdToSendToOtherPage(id);
    };

    const navigateToSecondView = () => {
        // navToSecondView was correctly typed => no bug possible in the params needed by SecondView
        navToSecondView(FeaturesRoutes.MySecondView, { id: idToSendToOtherPage });
    };

    // The properties returned by the .hook file are sorted by alphabetical order
    return {
        eventMessage,
        firstComponentTitle,
        handlePressOnFirstComponent,
        handlePressOnSecondComponent,
        ids,
        message,
        navigateToSecondView,
        secondComponentTitle,
    };
};
