# Angular Front End Development Project

This repository contains an Angular project submitted in Fyle Internship challenge 2k23. The project includes various components and screens, each serving a specific purpose. Below, you'll find an overview of the project's main components:

## Components

### Welcome Screen

The `WelcomeScreenComponent` displays a welcome message and a "Get Started" button. Clicking the button will navigate to the main page.

### Navbar

The `NavbarComponent` represents the project's navigation bar, displaying the project name and logo.

### Main Page

The `MainPageComponent` provides a form to input a GitHub username. Upon submission, it retrieves user data and handles error conditions, including user not found.

### Profile

The `ProfileComponent` displays detailed information about a GitHub user, including their name, bio, location, Twitter handle, and public repositories. It also allows you to paginate through the user's repositories.

## Unit Testing and Code Coverage

Unit testing is an integral part of this project to ensure code quality and functionality. I have done unit testing only for main-page component. Don't have much knowlege of testing yet. Will try to add more test cases in future.
To run unit tests and measure code coverage:

- Make sure you have the Angular CLI installed.
- Install project dependencies using `npm install`.
- Run unit tests with code coverage using the following command:
  ```bash
  ng test --code-coverage
  ```

## Live Link for the project :

https://fyle-internship-challenge-23-eight.vercel.app/
