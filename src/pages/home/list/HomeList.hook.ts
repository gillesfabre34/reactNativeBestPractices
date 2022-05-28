import { HomeListProps } from './HomeList';
import { Pet } from '../../../shared/interfaces/Pet.interface';
import i18n from '../../../shared/i18n/i18n';

/**
 * REMARKS :
 - This hook is the custom hook of the component HomeViewFirstComponent. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const useHomeList = (props: HomeListProps) => {
    const { onPress } = props;
    const title = i18n.t('HomeList.petsList');

    const handlePress = (pet: Pet) => {
        // Do some stuff
        // Call the onPress prop
        onPress(pet);
    };

    return {
        ...props,
        handlePress,
        title,
    };
};
