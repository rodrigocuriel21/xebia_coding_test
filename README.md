# GitHub Topic Explorer

# GitHub Authorization Token

This demo uses a temporal access token that will expires on Wed, Jun 8 2022.

Token is located in .env file.
REACT_APP_GITHUB_API_TOKEN=

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

- I have used a custom UI template, with a left menu
- There is an history of the logs of each search

### How to run app & test

- Leave instruction on how to run and test your app here
- No tests were added

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:
- src/queries: Apollo client to fetch the data from GraphQL server
- src/store: Global state implemented (redux)
- src/components: Atomic design used to create the UI Components

- Additional Features:
- Material UI
- Styled Components
- Typescript
