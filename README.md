Smart Goal Planner
A  web application built with React for managing savings goals, tracking progress, and developing smart financial habits.

 By Abdirahman Dagane 
 
![screenshot](smartgoal.png)

 Project Description
What is this project?
 Smart Goal Planner is a React-based app that helps users set, manage, and track multiple savings goals. Each goal can have a name, target amount, deposit history, progress bar, and more. It promotes better financial planning using a clean and interactive interface.

 How Does It Work?
Users can:
Add a new savings goal (e.g., “Buy a Laptop”, “Vacation Trip”)


Allocate deposits to each goal


View a progress bar showing percentage saved


Edit or delete goals


View history of deposits (with timestamps)


The application uses React components, state management, and local JSON Server (db.json) to persist data (CRUD).

 Who Are the Users?
This app is designed for:
Individuals planning multiple financial goals


Students learning React, CRUD operations, and component-based design


Teams building collaborative frontend apps



 Project Goals
 
To provide a full-stack-like experience with:
Component design using React


Form handling and validation


Dynamic rendering using state and props


Working with local APIs (via JSON Server)






 Features

 
Core Features
Add, view, edit, delete savings goals


Allocate deposits


Show progress with percentage bar


CRUD with db.json


Stretch Features
Filter by goal status (e.g., “In Progress”, “Completed”)


Deposit timeline with timestamp


Goal categories (e.g., Personal, Education, Business)


Sort by deadline or goal size



 How to Use
1. Clone the Repo

[git clone https://smart-goal-planner.git
cd smart-goal-planner](https://github.com/daganeabdul/smart-goal-planner.git)

-[smart-goal-api] ( https://github.com/daganeabdul/smart-goal-api.git)

2. Install Dependencies

npm install

3. Start the JSON Server

npx json-server --watch db.json --port 3001

4. Run the React App
npm run dev


 Project Structure
smart-goal-planner/

public/
   index.html

src/
  components/
     App.jsx
     index.js

 db.json         
.gitignore
package.json
README.md


 Testing
Checklist for manual testing:
Add goals and check appearance


Edit goal info and ensure changes persist


Make a deposit and verify update


Delete goal and check list updates


Refresh browser – data should persist


Use console logs or React DevTools to debug components and props.


 License
This project is licensed under the MIT License – free to use, share, and modify.


 




