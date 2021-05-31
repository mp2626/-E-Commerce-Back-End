# E-Commerce-Back-End

# User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
# Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

# Features

## Get Routes

Application has GET routes to return all categories, all products, and all tags.

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

## Get Routes by ID

Application has GET routes by id to return a single category, a single product, and a single tag:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

## Create, Update and Delete Routes

Application has POST, PUT, and DELETE routes for categories, products and tags:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

# Installation

Run the below commands in the terminal:

* node init -y
* npm install
* npm run start
* npm run seed

# Invoke application

In order to run the application enter 'npn run start' in the terminal.

# Link to Git Hub

https://github.com/mp2626/-E-Commerce-Back-End

# Programming Languages/Packages
 * JavaScript
 * mySql
 * Express
 * Sequelize
 * dotenv
 
# Authors
Contributor - Michael Perrin
