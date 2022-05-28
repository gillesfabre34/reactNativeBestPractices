import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { usePetForm } from './PetForm.hook';
import style from './PetForm.style';

/**
 * REMARKS :
 - A page is not included in some component => a page should not have props
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const PetForm: React.FC = () => {
    const h = usePetForm();
    return (
        <View style={style.container}>
            <Text>{h.title}</Text>
            <TouchableOpacity style={style.content} onPress={h.goBackToHomeView}>
                <Text>Go back to Home view</Text>
            </TouchableOpacity>
        </View>
    );
};
