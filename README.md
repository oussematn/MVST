# MVST Challenge
This small react project created in order to test my programming abilities in order to join MVST as an intern.
It's Github Repositories page clone with search functionality. So you can see the fetched user profile info and repositores and filter the latter by name.

## Changing The User
By default, the app will fetch my personal profile and repositories. To change that, you can add `username` parameter to the browser URL. For example, let's say you want to search for `torvalds` username, the URL should be like so:

````
http://localhost:3000?username=torvalds
````

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
