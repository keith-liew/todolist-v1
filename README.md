# Express ToDoList
> Express web todolist app with EJS.
> Live demo is available on [Cyclic](https://busy-crown-boa.cyclic.app/) or [Render](https://todolist-pbcp.onrender.com), both are free-tier plan.


## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Lesson Learned](#lesson-learned)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
- A simple express web server that implement EJS as page template
- The webpage allows user to note down or cross-out and remove the task as a to-do-list item
- It allows user to create customize list for specific task (by typing a self-define route)
- A set of 3 default tasks will be generated whenever the task database is empty.
- The web app is connected to mongoDB Atlas cloud service
- For the sake of practicing secure deployment, the URI of Atlas of the owner will not be uploaded to the remote repository.
- Purpose of building this project is to learn and practice my coding skill


## Technologies Used
- Express: ^4.16.3
- Node: ^14.17.6
- ejs: ^3.1.8
- lodash: ^4.17.21
- mongoose: ^6.6.1
- dotenv: ^16.0.2


## Features
- Mark down a task
- Cross-out a existing task


## Screenshots
- Homepage
![homepage](/public/images/index.html.png)

- Homepage (Add task)
![homepage(after)](/public/images/index.html(after).png)

- MongoDB Atlas (Task Collection)
![mongodbAtlas](/public/images/mongodbAtlas.png)

- Work List Page
![workList](/public/images/workList.png)

- MongoDB Atlas (List Collection Work Document)
![mongodbAtlas(workList)](/public/images/mongodbAtlas(workList).png)

- Work List Page (Add task)
![workList(After)](/public/images/workList(after).png)

- MongoDB Atlas (List Collection Work Document)(Add task embeded reference)
![mongodbAtlas(workList)(after)](/public/images/mongodbAtlas(workList).png)

- Create new list of task
![newSecretList](/public/images/newSecretList.png)

- MongoDB Atlas
![mongodbAtlas(newList)](/public/images/mongodbAtlas(newList).png)

- Remove task from the list
![newSecretList(AfterChecked)](/public/images/newSecretList(AfterChecked).png)


## Setup
- Project environment:
    - [Node.js](https://nodejs.org/en/) installed.
    - [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/) installed.
- Cloud Database environment (Optional):
    - Create a mongoDB Atlas account


## Usage
- On project terminal
    - install dependencies `npm install`
    - start the app `npm app.js`
- On Mongodb Shell
    - start the database server `mongosh`
- Or MongoDB Atlas (Optional):
  - Connect to your database via mongoose with the URI of your database (remember to change the information of username,password,clustername and password accordingly)
  - You should be able to get a customized URI from your account
  - For more detailed information and documentation, please visit mongoDB doc website [mongoDB/docs](https://www.mongodb.com/docs/atlas/)

```javascript
mongoose.connect("mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<databasename>?w=majority");
```


## Project Status
Project is: _complete_ 


## Lesson Learned
- Experience the mongoDatabase development process
  - How to create, read, update, and delete documents of mongoDB
- Implement mongoose to the project
  - Create schema of mongoDB collection
  - Create schema validation
  - Create reference from another model
  - Create model with schema
  - Export model and schema
  - Learn the most basic mongoose functions and methods in order to manipulate the data from database
- Establish connection between cloud database service and web
- Make good use of hidden input and express dynamic route parameters to futher improve posting request
- Found alternative fullstack hosting websites other than heroku


## Room for Improvement
- Improvement for more user-friendly user interface and user experience


## Acknowledgements
- This project was inspired by Angela Yu.
- This project was based on [this course](https://www.udemy.com/course/the-complete-web-development-bootcamp/) on Udemy.
