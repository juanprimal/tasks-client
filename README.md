# React front end client tasks app

This is a small client app built to consume an API and manage Users and Tasks for each user with CRUD functionality.

## Requirements

[Node](https://nodejs.org/), [Git](https://git-scm.com/), [Yarn](https://yarnpkg.com/)

## Installation

Clone this repository

```bash
git clone git@github.com:juanprimal/tasks-client.git
```

Enter in the directory created

```bash
cd tasks-client
```

Install the dependencies with Yarn

```bash
yarn install
```

Once finished the installation process, run the server

```bash
yarn start
```

Now the server should be running and listening in the port 3000

```bash
http://localhost:3000
```

Make sure that the API client is listening in the port 3001, or change the environment variable to use a different URL for the API server.

Create a .env file in the root folder of the project

```bash
touch .env
```

And add the ENV variable inside this file

```bash
REACT_APP_API_URL=http://yourapiserver:port
```

Then restart the app and launch again to make sure the ENV variable is loaded

## Running Specs

You can run the tests with the next command

```bash
yarn test
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## Thanks

For spending some time reading this file

## License

[MIT](https://choosealicense.com/licenses/mit/)
