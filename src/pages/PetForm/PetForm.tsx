import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSecondView } from './PetForm.hook';
import style from './PetForm.style';

/**
 * REMARKS :
 - A view is not included in some component => a view should not have any props
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const TodoForm: React.FC = () => {
    const h = useSecondView();
    return (
        <View style={style.container}>
            <Text>Second view</Text>
            <Text>{h.message}</Text>
            <TouchableOpacity style={style.content} onPress={h.goBackToHomeView}>
                <Text>Go back to Home view</Text>
            </TouchableOpacity>
        </View>
    );
};
