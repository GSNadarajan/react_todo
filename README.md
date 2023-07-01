# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### react components

Functional components
Class components

### react styling 

1) create separate css file
2) write inline styling "camelcase"
3) declare styling inside to js variable

### Functional components

1) normal function
     
     function function_name(){
        return(
          JSX content
        )
     }

2) Arrow function
 
    const function_name = () =>
    {
        JSX content
    }

### Function rules 

If we create a function like it will alert something like hello   

const Hello = () =>y{
   alert(hello);
}

to call the function we use 
### `function_name without ()` if we use () the function will be called automatically when we load the page

### if we need to pass the argument as a parameter in the function we should use 'anonymous function'

### `anonymous function`

### SYNTAX

() => {Function_name(arguments)}


### `function syntax for passing arguments` => const Handleclick = () => { `hello this is ${name}`}

to call the above function inside JSX <button onClick={() => Handleclick(nattu) }


### Event handling 

### `Use states in React`

There are some rules in usestates declaration or usage

1)We will not use the `usestate()` inside a `class components`

2)We will not use the `usestate()` inside a `conditional statements`

3) try to call the function as like ()=>{function name} 

### `list and keys` 

Lists and keys are nothing but we have usestate method inside a default values like two or more objects we will render it by using `Mapping` function 

### `REACT ICONS`

1) install through `npm install react-icons --save`

2) git repo for react icons `https://github.com/react-icons/react-icons#readme`

### This is url for react icons `https://react-icons.github.io/react-icons/`

### `React props`

React props are like passing properties into a components 

for example : we've header component in index.js

<header title='Nattu'/>

1) To pass the title as props in the header component we will pass props as argument in the header function and we use `props.title` inside an `JSX element` like <h1>{props.title}</h1>

`Using these props we can able to share data from parent to child component but not possible with child to child components` 

### `Useref`

Useref is an another hook which basically used for focus in input field

###  `Useeffect`

Useeffect is also a hook in react which is a function and it renders everytime when some actions did in our site 

useeffect(
() => {
  console.log("rendering")
},[])

Here this is an example for useffect nd rendering text is printing in the console tab when any actions being did in the page and
[] -> this is a dependencies of the useeffect hook basically here it has no dependencies