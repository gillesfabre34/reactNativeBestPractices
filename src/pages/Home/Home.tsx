import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './Home.style';
import { useHomeView } from './Home.hook';
import { HomeViewFirstComponent } from './FirstComponent/HomeViewFirstComponent';
import { HomeViewSecondComponent } from './SecondComponent/HomeViewSecondComponent';

/**
 * REMARKS :
 - A view is not included in some component => a view should not have any props
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const Home: React.FC = () => {
    const h = useHomeView(); // The "h" means "hook"
    return (
        <View style={style.container}>
            <Text>Home view</Text>
            {/*The logic behind the value of the message is placed in the .hook file*/}
            <Text>{h.message}</Text>
            {/* use h.handlePressOnFirstComponent and not () => h.handlePressOnFirstComponent() (shortened writing)*/}
            <HomeViewFirstComponent
                onPress={h.handlePressOnFirstComponent}
                title={h.firstComponentTitle}
            />
            {/* No shortened writing because of the parameter 'id'*/}
            <HomeViewSecondComponent
                ids={h.ids}
                onPress={(id: number) => h.handlePressOnSecondComponent(id)}
                title={h.secondComponentTitle}
            />
            <TouchableOpacity style={style.content} onPress={h.navigateToSecondView}>
                <Text>Navigate to the other page</Text>
            </TouchableOpacity>
        </View>
    );
};
