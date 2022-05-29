import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/router/Navigator';

export const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};
