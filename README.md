# Express web todolist app with EJS

[What the project does](#project-description) |
[Technology Involved](#technologies-involved) |
[Usage](#usage) |
[Lesson Learned](#lesson-learned) |
[Preview](#preview) |

# Project Description

- A simple express web server that implement EJS as page template
- The webpage allows user to note down or cross-out and remove the task as a to-do-list item
- It allows user to create customize list for specific task (by typing a self-define route)
- A set of 3 default tasks will be generated whenever the task is empty.
- The web app is connected to mongoDB Atlas cloud service
- For the sake of practicing secure deployment, the URI of Atlas of the owner will not be uploaded to the remote repository.

# Technologies Involved

- Express: ^4.16.3
- Node: ^14.17.6
- ejs: ^3.1.8
- lodash: ^4.17.21
- mongoose: ^6.6.1
- dotenv: ^16.0.2

# Usage

1. Install dependencies: `npm install`
2. Run server: `note app.js`

# Lesson Learned

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

# Preview

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

