import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../router/Routes';

/**
 * The type HomeNav is used to specify the params needed by the page Home
 * This type is not exported, because only HomeNavigation should be used
 */
type HomeNav = {
    [Routes.Home]: undefined;
};

// The type HomeNavigation is used by all the views which are navigating to the page Home
export type HomeNavigation = StackNavigationProp<HomeNav>;
