# Testing React App with Jest + Enzyme 

Applying testing principles to a React app that fetches users data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

## Frameworks and Tools
Utilizing Jest and Enzyme for the testing of functions and components in the app 

[Jest](https://jestjs.io/) - a JavaScript testing framework.
```javascript
test("test description", () => {
    // Test goes here
})
```

[Enzyme](https://enzymejs.github.io/enzyme/) - a JavaScript Testing utility for React that makes it easier to test React Components' output.
```javascript
shallow() - gives a light-weight representation of what a component renders

render() - gives the HTML rendered output of my component.

mount() - gives a full DOM representation of my component. Useful for testing DOM events such as onClick, onSubmit, etc...
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need installed on your local machine.

```
Text editor (I use VSCode)
NPM
Git
```

### How To:

To use the app:

```
1. Fork and/or Clone repo.
2. Run 'npm install' on your local repo so as to get the required dependencies.
3. Run tests with 'npm test'.
4. Launch working app with 'npm start'
```

Have fun :)
