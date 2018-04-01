# named-context
named-context is a wrapper for React.createContext, letting you retrieve specific context component pairs by name. It "blackboxes" the singleton nature of createContext so that you can use a single import and a known string name to get the context you want.

## Installation and use
Install into your project with `npm i named-context` (for Node.js), or `npm i -D named-context` (for Webpack/Parcel/Browserify or other bundled projects).

### Basic example

#### Provider file
```jsx
import getContext from 'named-context';

const Context = getContext('some identifier');

export default () => (
  <Context.Provider value={{ name: 'James T Kirk' }}>
    <Consumer />
  </Context.Provider>
)
```

#### Consumer file
```jsx
import getContext from 'named-context';

const Context = getContext('some identifier');

export default () => (
  <Context.Consumer>
    {value => (
      <p>Name: {value.name}</p>
    )}
  </Context.Consumer>
)
```

## API

named-context exports a single function as the default export.

### getContext
```jsx
import getContext from 'named-context';

const { Provider, Consumer } = getContext('identifier');
```

`getContext` takes a single string argument and returns the object created by React.createContext(). All calls to getContext with the same string argument will return the same context object. You can use getContext() across files.

Usage of Provider and Consumer can be found [in the React docs](https://reactjs.org/docs/context.html).

## ES support
This library is compiled with Babel to support IE11, last 3 Safari, and last 2 Chrome and Firefox. Publically, it expects ES6 methods/objects to exist (natively or polyfilled). Realistically, you could test it and find that it might work in a pure ES5 environment.

If a case is found which doesn't work in pure ES5 environments, and it doesn't require drastic changes or much uglier code, I'll pull those changes in.

## Getting help
You can frequently find me (samsch) hanging out in ##javascript, #Node.js, and #reactjs on Freenode, especially during US working hours. This is a small library, so it's likely someone else could help you as well if you point them at the source file and your code.

## Contributing
The projects builds with `npm run build`, which is also called on pre-publish.
