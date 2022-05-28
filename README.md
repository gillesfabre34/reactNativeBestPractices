What are the best practices in React or React Native ?

Do you remember how painful it is to read code written by someone which didn't care about how to write a code easily understandable ? Did you never want to throw it directly in the garbage and to rewrite it from scratch ?
In React or React Native, unfortunately, the code written by most of the developers has lower quality than the code written in other frameworks like Angular. Why ? Because even if the simplicity of React is one of its bests qualities, it may become a big default in the domain of the code quality.
In Angular, all the structure of your app is decided for you. You must put your component in one file, its template in another one, the logic in a "service" imported in a module which will provide it to all the components which need it. It is constraining, but it is clear. At the contrary, in React, you can simply put everything in the same file. Easier, isn't it ?
Yes, it is easier, but it may become a problem if you develop a long-term project, with thousands of lines of codes and a lot of developers which will need to understand the files written by their predecessors. If you want to develop a complex React or React Native application which will stay maintainable during months and years, you have no choice : you must strictly respect some good practices.
In this article, I will explain in details how to define the architecture of a React Native application, how to improve its readability and how to keep it maintainable in the long-term. Of course, most of the best practices described below may also be used for React apps.
Architecture
Most of the React or React Native apps are structured with a flatten architecture, which is maybe good for simple apps, but not for big projects. When you have hundreds of files, you must be able to find them easily, and to understand quickly the relations between them.
The example used in this article is a React Native app which will simply display a list of pets in the Home page and a form in a second page which will be used to add or update a pet.
Here is its architecture :
Let's explain which files to add in each folder :
api
The files needed to make or intercept requests to or from an eventual backend.
assets
The fonts, icons, images or videos needed by your application. Each file should be put in a subfolder corresponding to its type (font, icon, …)
pages
This is the main folder of the app. Each subfolder of pages corresponds to a page of the application and contains the following files and subfolders (the example below is relative to the home page):
Home.tsx

This file is the template of the Home component. It contains only the declaration of the component and its corresponding JSX code. No logic should be put in this file.
Home.hook.ts

This file contains all the logic of theHome component. There is no JSX in this file (that's why its extension is .tsand not.tsx). The notation .hook means that this file contains a custom hook which includes all the logic of the component.
Home.nav.ts

This file is dedicated to the typing of the navigation to or from the Home component.
Home.style.ts

The StyleSheet corresponding to the Home component is placed here.
Subfolders

The folder Home contains the subfolders corresponding to the subcomponents of the home page, which will in turn contain their own subfolders corresponding to their own subcomponents. Please note that these subfolders don't contain .nav files, because we can only navigate to a page, not to one of its subcomponents.
router
The files relative to the navigation. This folder includes the file routes.ts which is an enum of the routes to the different pages, and the file navigator.ts which contains all the StackNavigator.Screen corresponding to the different pages.
shared
This folder includes the subfolders which are corresponding to the different kind of files which may be used in the different parts of the application.
enums , interfaces , types , styles

No surprise: these subfolders simply contain the enums , interfaces , types and styles  which may be used in the rest of the app.
components

This folder contains the components which may be shared between different pages, like buttons, inputs, etc. Like previously, each component is placed in a corresponding subfolder and is accompanied by its own .hook and .style files, and may have subfolders corresponding to eventual subcomponents.
utils
This folder contains subfolders corresponding to the different kind of helpful functions which may be used by the other files of the app. For example, the folder utils may contain the subfolders arrays , numbers and strings which contain functions relative to arrays, numbers and strings.
store
This folder contains the files relative to the different stores, like the reducers or the slices .
Remarks about naming :
The names of the files are written is PascalCase and the names of the folders are written in camelCase.
The names of the components are the concatenation of the names of the successive subfolders containing them. For example, the component placed in the folder home/list/item is called HomeListItem.tsx . With this convention, it is easy to understand the location and the role of each component.

Components
One of the most important principles in programming is the separation of concerns. Unfortunately, most of the React and React Native applications are written without respecting this principle : the logic (the Ts code) is mixed with the template (the JSX code), which is the best way to write a weakly maintainable app.
This section describes how to split the code relative to a component in different files having their own and unique role. The example below is relative to the home page. An example with a component containing props is written further.
Pages
At first, I will describe how to split a component corresponding to a page. We may navigate to it, and it usually doesn't contain any props because a page is not included inside other components (excepting inside the root components like App , Provider ,Router , etc.).
Home.tsx

This file contains the JSX code corresponding to the template of the component. It doesn't contain any logic, inside or outside the JSX. All the logic is moved to the file Home.hook.ts , which is called by the custom hook useHome()
import { useHome } from './Home.hook.ts';
export const Home: React.FC = () => {
const h = useHome();  // "h" for "hook"
return (
<View style={style.container}>
<Text style={style.title}>{h.title}</Text>
<HomeList onPress={h.edit} pets={h.pets} />
<Button
onPress={h.navigateToPetForm}
text={h.addButtonText}
/>
</View>
);
}:
Home.hook.ts

This file contains all the logic relative to the Home component. It is a Ts file, so it can't contain any JSX code.
export const useHome = () => {
const pets: Pet[] = useSelector(selectPets);
const { navigate: navToPetForm } =
useNavigation<PetFormNavigation>();
const title = i18n.t('Home.title');
const addButtonText = i18n.t('Home.addPet');
const edit = (pet: Pet) => {
navToPetForm(Routes.PetForm, { pet });
};
const navigateToPetForm = () => {
navToPetForm(Routes.PetForm);
};
return {
addButtonText,
edit,
navigateToForm,
title,
};
};
Home.nav.ts

The navigation between the different pages of an application may be difficult to maintain, because the parameters needed by a given page may change in the future. Consequently, if the navigation is not carefully typed, it may easily create new bugs.
In this example, I use the @react-navigation library.
type HomeNav = { // do not export this type
[Routes.Home]: undefined; // No param needed to navigate to Home
};
export type HomeNavigation = StackNavigationProp<HomeNav>;
Remark :
For the home page, there is no param needed. Consequently, we don't need to use the hook useRoute in Home.hook.ts , and thus we don't need to define a type HomeRoute = RouteProp<HomeNav> . It is different if we need some params, like the PetForm page which may receive the param pet (see further).
Home.style.ts

This file contains the StyleSheet mandatory for the template.
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
container: {
backgroundColor: '#DBDBDB',
},
title: {
fontSize: 16,
},
});
SubComponents
First, remember that we may navigate to a page, not to a subcomponent of a given page. That's why you can't have a .nav file relative to a subcomponent.
Second, contrary to pages, components may receive some props as parameters. This difference has some consequences. Let's look at the subcomponent HomeList .
HomeList.tsx

This file contains first an interface HomeListProps which will describe the type needed by the props of the component HomeList .
Remark :
If we wanted to strictly respect the single responsibility principle, this file should not include the interface HomeListProps , but only the JSX code. However, for a better readability, it is usually better to let it here.
export interface HomeListProps {
onPress: (pet: Pet) => void;
pets: Pet[];
};
export HomeList: React.FC<HomeListProps> = (props) => {
const h = useHomeList(props);
return (
// Some JSX code
);
};
HomeList.hook.ts

import { HomeListProps } from './HomeList';
export const useHomeList = (props: HomeListProps) => {
const { onPress, pets } = props;
// do some stuff
return {
...props,
// other properties used in HomeList component
};
};
HomeList.style.ts

This file contains the style specific to the subComponent HomeList.
Navigation with params
We may navigate to pages which need some parameters. For example, the page PetForm needs the parameter pet in "edit mode", and no parameter in "add mode".
PetForm.tsx

import { usePetForm } from './PetForm.hook.ts';
export const PetForm: React.FC = () => {
const h = usePetForm();
return (
// The JSX corresponding to the form
);
}
PetForm.hook.ts

export const usePetForm = () => {
const { pet } = useRoute<PetFormRoute>().params;
const { navigate: navToHome } =
useNavigation<HomeNavigation>();
// do some stuff
return {
// some properties needed by PetForm component
};
};
PetForm.nav.ts

type PetFormNav = {
[Routes.PetForm]: { pet?: Pet };
};
export type PetFormRoute = RouteProp<PetFormNav>;
export type PetFormNavigation = StackNavigationProp<PetFormNav>;
Tips
Logic extraction
Files must be short to be maintainable. This rule is true in every language and every framework. In React or React Native, the components and the .hook files should not have more than 100 or 150 lines (with the exception of the imports). They may be longer, but only for very specific cases.
What should you do to reduce the length of the files ? If your JSX is too long, you probably may identify some part which has a specific role and could be placed in a subcomponent. If it's your .hook.ts file which is too long, you can try to move some specific parts into different files. For example, you can put the declaration of big constants (like some initial values for a given form) in a .const.ts file, or you can move the schema of your forms (like Yup schemas) into some .schema.ts file.
Properties sorted by alphabetical order
In the interest of readability, the properties of the objects, interfaces, types and enums should be sorted by alphabetical order.
No export default
You should avoid the export default and replace them by named imports. It will be easier to find the files using your exported value (by a click on its name on your IDE). The structure of your app will be easier to understand, and you will be sure to not forget something when you will do some refactoring.
For example, you should replace
// MyCpt.tsx
const MyCpt: React.FC = () => {
// Some stuff
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCpt)
by something like this :
// MyCpt.tsx
export const MyCpt: React.FC = (props) => {
const h = useMyCpt(props);
// Some stuff
}
// MyCpt.hook.ts
export const useMyCpt = (props) => {
const { prop1, prop2 } = props;
const dispatch = useDispatch();
// Some stuff
return {
...props,
// other values
};
};
