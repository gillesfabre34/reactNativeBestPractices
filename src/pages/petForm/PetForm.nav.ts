import { Routes } from '../../router/Routes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pet } from '../../shared/interfaces/Pet.interface';

/**
 * The type PetFormNav is used to specify the params needed by the page PetForm
 * This type is not exported, because only PetFormRoute and PetFormNavigation should be imported
 */
type PetFormNav = {
    [Routes.PetForm]: { pet?: Pet };
};

// The type PetFormRoute is used only in the page PetForm
export type PetFormRoute = RouteProp<PetFormNav>;

// The type PetFormNavigation is used by all the views which are navigating to the page PetForm
export type PetFormNavigation = StackNavigationProp<PetFormNav>;
