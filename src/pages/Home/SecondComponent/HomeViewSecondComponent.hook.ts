import { HomeViewSecondComponentProps } from './HomeViewSecondComponent';

/**
 * REMARKS :
 - This hook is the custom hook of the component HomeViewSecondComponent. Its includes all its logic
 - No JSX in a .hook file (=> its extension should be .ts and not .tsx)
 **/
export const useHomeViewSecondComponent = (props: HomeViewSecondComponentProps) => {
    const { onPress } = props;

    const handlePressReturnId = (id: number) => {
        // Do some stuff

        // Call the onPress prop
        onPress(id);
    };

    return {
        ...props,
        handlePressReturnId,
    };
};
