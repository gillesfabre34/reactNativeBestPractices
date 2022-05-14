What are the best practices in React Native ?
Do you remember how painful is it to read code written by someone which didn't care about how to write a code easily understandable ? Did you never want to throw it in the garbage and to rewrite it from scratch ? This kind of code is a calamity, and its author should be sent to the International Criminal Court.
In React or React Native, unfortunately, the code quality is usually lower than the code written in other frameworks like Angular. Why ? Because the highest quality of React, its simplicity, is also its worst default. In Angular, all the structure of your app was decided for you. You have your component in one file, its template in another one, the logic needed by your component is extracted in a "service" file, and the service in imported in a module which will provide it to the components which need it. In React, you can put everything in the same file. That's easier, isn't it ?
Yes, its easier, but it may become a problem if you develop a long-term project, with thousands of lines of codes and a lot of developers which will need to understand the files written by their predecessors. If you want to develop a complex React or React Native application which will stay maintainable during months and years, you have no choice : you must strictly respect some coding best practices.
In this article, I will explain in details how to define the architecture of a React Native application, how to improve its readability and how to keep it maintainable in the long-term. Of course, most of the best practices described below may also be used for React web apps.
Architecture
Most of the React apps are structured with a flatten architecture, which is maybe good for simple apps, but not for big projects. When you have hundreds of files, you must be able to find them easily, and to understand the relations between them.
The example used in this article is a React Native app which will simply display a list of pets in the Home page and a form in a second page which will be used to add or update a pet. Here is its architecture :
Let's explain which files to add in each folder :
api

The files needed to make or intercept requests to an eventual backend.
assets

The fonts, icons, images or videos needed by your application. Each file should be put in a subfolder corresponding to its type (font, icon, …)
pages

This is the main folder of our app. Each subfolder of pages corresponds to a page of the application and contains the following files :
