/**
 * The type SecondViewNav is used to specify the params needed by the view SecondView
 * This type is not exported, because only SecondViewRoute and SecondViewNavigation should be used
 */
import { Route } from '../../router/Route';

type SecondViewNav = {
    [Route.PetForm]: { id?: number };
};

// The type SecondViewRoute is used only in the view SecondView
export type SecondViewRoute = RouteProp<SecondViewNav>;

// The type SecondViewNavigation is used by all the views which are navigating to SecondView
export type PetFormNav = StackNavigationProp<SecondViewNav>;
