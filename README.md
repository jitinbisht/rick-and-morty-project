# Rick and Morty Project

A small app that acts as a front-end to the [Rick and Morty API](https://rickandmortyapi.com/api/character/)
characters endpoint.

This project uses React and TypeScript and was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## How to Start

In the project directory, first run `npm install` to install the dependencies. Then you can run:

### `npm start`

Runs the app in the development mode. Should automatically open
[http://localhost:3000](http://localhost:3000) for viewing in the browser.

Alternatively, you can follow the directions below to build and run a production-optimized version.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode
and optimizes the build for the best performance.

Once this is done, you can easily serve it with a static server by running `npx serve build`.

### API Wrapper

I built a [small wrapper around the API](src/lib/api.ts). It uses `axios` for network requests and
uses `node-cache` to cache API responses for 10 minutes.

It is also [tested using Jest](src/lib/api.test.ts). Note that the tests are set to skip by default
since they hit the live API.

### Styling

I used [styled-components](https://www.styled-components.com/) for styling because it's awesome.

### Errors

The API returns a 404 when a search term does not yield any results. This is bad behavior and is
kind of annoying; even though errors are caught/handled, you will still see red in the developer
console even when the app is working as expected. Oh well.

### Possible Next Steps

I had to knock off, but some possible next steps (which I may end up implementing if I have time)
include:

- Support for filtering characters by criteria
- Sorting (results are currently limited to the first 20)

### SCREENSHOTS:

![image](https://user-images.githubusercontent.com/13505191/71450407-4b8fb980-2787-11ea-92c7-38f1129ee4f1.png)

![image](https://user-images.githubusercontent.com/13505191/71450411-59453f00-2787-11ea-9765-3bcec209b420.png)

![image](https://user-images.githubusercontent.com/13505191/71450413-5fd3b680-2787-11ea-8062-0ddcf62c334b.png)

![image](https://user-images.githubusercontent.com/13505191/71450414-64986a80-2787-11ea-9a86-5ca06e0ddb89.png)

![image](https://user-images.githubusercontent.com/13505191/71450415-69f5b500-2787-11ea-9e37-74995e2fd185.png)

![image](https://user-images.githubusercontent.com/13505191/71450417-6e21d280-2787-11ea-9bb2-69f40736bcab.png)
