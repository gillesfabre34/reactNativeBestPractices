import { RouteProp } from '@react-navigation/native';
import { FeaturesRoutes } from '../../router/routes/features.routes';
import { StackNavigationProp } from '@react-navigation/stack';

/**
 * The type SecondViewNav is used to specify the params needed by the view SecondView
 * This type is not exported, because only SecondViewRoute and SecondViewNavigation should be used
 */
type SecondViewNav = {
    [FeaturesRoutes.MySecondView]: { id: number | undefined };
};

// The type SecondViewRoute is used only in the view SecondView
export type SecondViewRoute = RouteProp<SecondViewNav>;

// The type SecondViewNavigation is used by all the views which are navigating to SecondView
export type SecondViewNavigation = StackNavigationProp<SecondViewNav>;
