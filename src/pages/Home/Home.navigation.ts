import {RouteProp} from '@react-navigation/native';
import {FeaturesRoutes} from '../../router/routes/features.routes';
import {StackNavigationProp} from '@react-navigation/stack';

/**
 * The type HomeViewNav is used to specify the params needed by the view HomeView
 * This type is not exported, because only HomeViewRoute and HomeViewNavigation should be used
 */
type HomeViewNav = {
  [FeaturesRoutes.MyHomeView]: {navigateFrom?: string};
};

// The type HomeViewRoute is used only in the view HomeView
export type HomeViewRoute = RouteProp<HomeViewNav>;

// The type HomeViewNavigation is used by all the views which are navigating to HomeView
export type HomeNavigation = StackNavigationProp<HomeViewNav>;
