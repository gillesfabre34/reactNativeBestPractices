import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './HomeListItem.style';
import { useHomeListItem } from './HomeListItem.hook';
import { Pet } from '../../../../shared/interfaces/Pet.interface';

export interface HomeListItemProps {
    onPress: () => any;
    pet: Pet;
}

export const HomeListItem: React.FC<HomeListItemProps> = (props) => {
    const h = useHomeListItem(props);
    return (
        <TouchableOpacity style={style.container} onPress={h.onPress}>
            {/*The texts are calculated in the .hook file*/}
            <Text>{h.name}</Text>
            <Text>{h.age}</Text>
        </TouchableOpacity>
    );
};
