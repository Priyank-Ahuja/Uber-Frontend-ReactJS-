# HPDF Team Task Github Submission - UBER CLONE

This is a clone of a major cab booking website known as UBER. In this app a user can either sign up as a Driver or a Rider using the Hasura auth api. User data on sign up is stored on the hasura cluster database and if the sign in fails an error message is displayed to the user. The rider then can further book a cab by entering the Pick up location and Destination and can also see the cabs near the pick up location pinned on google maps before booking the cab. 

The UI is build using React JS and the backend is done using NodeJs-express.

For the app to function need a server that will receive the form data sent by the users during sign up, login and booking the cab, process this data and respond back to the user with state of the process. The pickup location and destination is stored and is saved and shown on the google maps by using google maps for ReactJS.

## Pre-requisites

### Back-end

* We will use Node.js along with the express framework to build our server. Ensure that you have Node installed on your computer, do this by running `node-v` in the terminal. If you do not have Node installed you can get it from https://nodejs.org

* Before you begin, ensure that you have the latest version of the `hasura cli` installed. You can find instructions to download the `hasura cli` from [here](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)

### Front-end

* We will use Create-react-app along with the Ant Design framework to build our app. Ensure that you have Node installed on your computer, do this by running `node-v` in the terminal. If you do not have Node installed you can get it from https://nodejs.org

## Quickstart

To see the app in action you can follow the instructions below:

* In your terminal input the following commands to clone the repo ans start the dev-server

```sh
$ git clone https://github.com/Priyank-Ahuja/Uber-Frontend-ReactJS-

$ cd Uber-Frontend-ReactJS-

# install dependencies
$ npm install

#start the dev-server
$ npm start
```

* Now navigate to `localhost:3000` in your browser

![app screen](https://i.imgur.com/8W8scam.png "app screen")

## Tutorial

Follow along for a step by step guide on developing this app

## Getting started

### Step 1 - Install create-react-app

```sh
$ npm install -g create-react-app
```

The above command will install create-react-app globaly which is a tool to Create React apps with no build configuration.

### Step 2 - Creating a basic project

```sh
$ create-react-app my-app
$ cd my-app
```

The above command does the following:

1. Creates a new folder in the current working directory called `my-app`
2. Populate the directory with the required files to get started with a react app

### Step 3 - Installing Material-Ui

```sh
$ npm install material-ui
```
This command will install ant design and save it to the `package.json` file.

### Step 4 - Installing the Ant Design Framework

```sh
$ npm install antd --save
```

This command will install ant design and save it to the `package.json` file.

### Step 5 - Configuring the project

To use some advance features provided by the material-ui ant design we need to configure it a bit, follow the official guid material-ui: http://www.material-ui.com/#/ ant design: https://ant.design/docs/react/use-with-create-react-app

### Step 6 - Folder structure

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── package-lock.json
├── yarn.lock
├── yarn-error.log
├── public
│   └── uber.png
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
    └── routers
    │   └── AppRouters.js
    └── components
        └── Background.js
        └── BookCab.js
        └── Destination.js
        └── DriverSignIn.js
        └── DriverSignUpHome.js
        └── Example.css
        └── Example.js
        └── HelpPage.js
        └── HomePage.js
        └── LoginPage.js
        └── Map.js
        └── MapPage.js.js
        └── NotFoundPage.js
        └── RidePage.js
        └── Toolbar.js
        └── UserSignIn.css
        └── UserSignIn.js
        └── UserSignInPage.js
```


  ![Home view](https://i.imgur.com/8W8scam.png "Home view")

  ![RidePage view](https://i.imgur.com/zO80Zci.png "RidePage view")
  
  ![MapPage view](https://i.imgur.com/WVjd9gL.png "MapPage view")
