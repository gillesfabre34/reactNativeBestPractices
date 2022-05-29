import React from 'react';
import { Text, View } from 'react-native';
import style from './HomeList.style';
import { useHomeList } from './HomeList.hook';
import { Pet } from '../../../shared/interfaces/Pet.interface';
import { HomeListItem } from './item/HomeListItem';

export interface HomeListProps {
    onPress: (pet: Pet) => void;
    pets: Pet[];
}

/**
 * REMARK : The name of the component starts with the name of its parent
 **/
export const HomeList: React.FC<HomeListProps> = (props) => {
    const h = useHomeList(props);
    return (
        <View style={style.listContainer}>
            <>
                <Text>{h.title}</Text>
                <View style={style.listArray}>
                    {h.pets.map((pet) => (
                        <HomeListItem pet={pet} onPress={() => h.handlePress(pet)} />
                    ))}
                </View>
            </>
        </View>
    );
};
