# Angular Shopping Cart Project

  Welcome to the Angular Shopping Cart project! This project is a simple and efficient solution for creating an online shopping experience using Angular, a powerful front-end framework.

## Introduction

  This Angular Shopping Cart project aims to provide a well-organized and customizable foundation for building e-commerce websites. It is built with Angular, taking advantage of its modular structure and flexibility.

## Features

  Product Catalog: Display a list of products with details.
  Shopping Cart: Allow users to add products to the cart.
  Cart Management: View, edit, and remove items from the cart.
  User Authentication: Register, log in, and log out functionality.
  Responsive Design: Ensure a seamless experience on various devices.

## Installation

  To run this project locally, follow these steps:

  1. Node.js and npm: Make sure you have Node.js installed, as it comes with npm (Node Package Manager). You can download and install 
     from the official Node.js website.

  2.  Angular CLI: Install the Angular CLI globally on your machine. Open your terminal or command prompt and run the following command:

      npm install -g @angular/cli


  3. Clone the repository

     git clone https://github.com/your-username/angular-shopping-cart.git

  4. Navigate to the project directory:
   
     cd angular-shopping-cart

  5. Install dependencies:
     
     npm install

  6. Start the development server:
    
     ng serve

  7. Open your browser and navigate to http://localhost:4200/ to see the app in action.

  ## Technologies Used

     Angular: Front-end framework for building robust and scalable web applications.
     TypeScript: Superset of JavaScript that adds static typing.
     Bootstrap: CSS framework for responsive and mobile-first design.
     Angular Material: For a consistent and visually appealing UI.

  # Backend Setup

  ## Introduction

     The backend of this project is built on Node.js using the Express.js framework and MongoDB as the database. Mongoose is employed as an Object Data Modeling (ODM) library to facilitate interactions with the MongoDB database. The server is initiated using the `npm start` command, which is configured in the `package.json` file.

  ## Prerequisites

     Before running the backend server, make sure you have the following installed:

     - [Node.js](https://nodejs.org/)
     - [npm (Node Package Manager)](https://www.npmjs.com/)
     - [MongoDB](https://www.mongodb.com/try/download/community)

  ## Installation
     
     In the terminal or command prompt

   1. Clone the repository:

      git clone https://github.com/your-username/angular-shopping-cart.git

   2. Navigate to the backend API directory:
      
      cd angular-shopping-cart-backend-api

   3. Install dependencies:

      npm install

   4. Start the backend server:

      npm start

      This will execute the node ./bin/www script, which initializes the server.


  ## Running unit tests

    Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
    
  ## Code scaffolding

    Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  ## Further help

    To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

  ## Build

    Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

  ## ENV 

    Environment file contains the following variable
    "apiURL"


  ## Versions

   Node: 20.6.1
   npm: 10.1.0
   Angular CLI: 16.2.4
