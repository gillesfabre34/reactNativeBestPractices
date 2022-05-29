import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Routes } from './Routes';
import { Home } from '../pages/home/Home';
import { PetForm } from '../pages/petForm/PetForm';

const StackNavigator = createStackNavigator();

export const StackNavigation = () => (
    <StackNavigator.Navigator initialRouteName={Routes.Home}>
        <StackNavigator.Screen name={Routes.Home} component={Home} />
        <StackNavigator.Screen name={Routes.PetForm} component={PetForm} />
    </StackNavigator.Navigator>
);
