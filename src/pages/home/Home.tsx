import React from 'react';
import { Text, View } from 'react-native';
import style from './Home.style';
import { useHome } from './Home.hook';
import { HomeList } from './list/HomeList';
import { CustomButton } from '../../shared/components/customButton/CustomButton';

/**
 * REMARKS :
 - A page is not included in some component => a page should not have props
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const Home: React.FC = () => {
    const h = useHome(); // "h" for "hook"
    return (
        <View style={style.container}>
            <Text style={style.title}>{h.title}</Text>
            {/* use h.edit and not () => h.edit() (shortened writing)*/}
            <HomeList onPress={h.edit} pets={h.pets} />
            <CustomButton onPress={h.navigateToPetForm} title={h.buttonText} />
        </View>
    );
};
