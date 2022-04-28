import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './HomeViewSecondComponent.style';
import { useHomeViewSecondComponent } from './HomeViewSecondComponent.hook';

export interface HomeViewSecondComponentProps {
    ids: number[];
    onPress: (id: number) => void;
    title: string;
}

/**
 * REMARKS :
 - The name of the component starts with the name of its parent
 - The name of its folder is written without the name of its parent
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const HomeViewSecondComponent: React.FC<HomeViewSecondComponentProps> = (props) => {
    const h = useHomeViewSecondComponent(props);
    return (
        <View style={style.container}>
            <Text>{h.title}</Text>
            {/*The JSX elements returned by the .map are included in this file (no JSX in .hook files)*/}
            {h.ids.map((id, index) => {
                return (
                    <TouchableOpacity
                        style={style.content}
                        onPress={() => h.handlePressReturnId(id)}
                        key={`idsMap-${index}`}>
                        <Text>Press here to return the id {id}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
