import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './HomeViewFirstComponent.style';
import { useMyFirstViewFirstComponent } from './HomeViewFirstComponent.hook';

export interface HomeViewFirstComponentProps {
    onPress: () => void;
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
export const HomeViewFirstComponent: React.FC<HomeViewFirstComponentProps> = (props) => {
    const h = useMyFirstViewFirstComponent(props); // The "h" means "hook"
    return (
        <View style={style.container}>
            <>
                <Text>{h.title}</Text>
                {/* use h.handlePress and not () => h.handlePress() (shortened writing)*/}
                <TouchableOpacity style={style.content} onPress={h.handlePress}>
                    <Text>
                        Press here to set the eventMessage to "You pressed on the first component"
                    </Text>
                </TouchableOpacity>
            </>
        </View>
    );
};
