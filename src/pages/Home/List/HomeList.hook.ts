import { HomeViewFirstComponentProps } from './HomeList';

/**
 * REMARKS :
 - This hook is the custom hook of the component HomeViewFirstComponent. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const useMyFirstViewFirstComponent = (props: HomeViewFirstComponentProps) => {
    const { onPress } = props;

    const handlePress = () => {
        // Do some stuff

        // Call the onPress prop
        onPress();
    };

    return {
        ...props,
        handlePress,
    };
};
