## HACK REACTOR REVIEW - GROCERY LIST

# The App
<img src="https://github.com/hackreactor/rpt25-fe-workshop/blob/master/client/dist/HackReactorReview_GroceryList.png" height="70%" width="70%">

# Description
Grocery List displays a list of groceries and their quantity from an array upon initial load.
It allows users to add more groceries to the database and immediately displays new ones added.

# Criteria
* pairing (solo) time target: 8 hours
* if you finish basic requirements before then, you *must* move along to advanced content.
* you must use help desk, or schedule a OH slot with any TM or SEIR by EOD Friday to show your diagram (described below), demonstrate your working app (or as much as you have implemented), and briefly walk through your code
* you must create a visual diagram of how the data is flowing through your application before your OH, and show your diagram to whomever you meet with, as well as submit it to: rpp.communication@galvanize.com


# Basic App Functionality you must implement
1. Initially upon page load displays a list of all of the groceries listed in the data.js file
2. Allows you to enter a grocery name and grocery quantity and click on an add button to add the item to the list
3. After adding a new grocery item, dynamically updates and displays the new grocery item on the page without reload the whole page
4. If the exact same grocery item was added (not case sensitive) then it updates the quantity of the item
5. After you have familiarized yourself with the repo and structure of the app, create a visual diagram of how the data is flowing through the application. Take a photo or a screenshot, and add it to your git repo as `diagram.png` (or whatever the image file type is)

# Advanced Front-end Functionality
Optional, but recommended. Do these if you have completed the basics and have ample time to spare
1. Ability to click on any grocery item and see a strike through of that item (as in its being checked off the list)
2. When a new grocery item is added then any striked-through items disappear from the page/list completely
3. Add a grocery name and quantity header and add the ability to sort by grocery item name or quantity

---
# Installation/Setup Instructions
1. Perform a Git Fork on the repository
1. Perform a Git Clone from your Github Repo to create a local clone of the project
1. Change Directory to the folder where you created the clone
1. Install nodemon by typing 'npm install -g nodemon' (you likely already have this installed)
1. Install all the project's dependencies by performing an npm install by typing 'npm install'
1. create a `.gitignore` file with the appropriate entry to avoid committing any of the files in the `node_modules` folder to your git repo.
1. In the same terminal window, type `npm run react-dev`. This will start webpack for transpilation of your jsx files
1. In a new terminal window, type `npm run start`. This will start express web server for your site
1. Open a browser window and enter http://localhost:3000 as the URL and you should see the main page of the site
1. Before you begin coding you should always open and view all of the files and folders provided in this project repo and try and understand each one.
1. Open the code in your favorite editor and enjoy! :-)


# Important Information

## Express.js
For this project you will not be using live server but instead a local server has been setup for you
using Express.js.

## Webpack
Instead of running a manual babel transpiler (with a watch command) you will instead use a package called Webpack.
Webpack has the ability to perform many functions but for this project it will simply watch and automatically transpile your jsx files
using the react and es2015 presets. It will take all of your transpiled files and combine them into a single filed called bundle.js
Your bundle.js is linked via your index.html.

If you have errors in your react files and you don't see errors in your browser console window because there was
a problem transpiling the jsx files then you will see those errors in the terminal window where webpack is running.

## Summary
Once you execute the steps in the instructions to start your Express.js server and Webpack you will not need to
do anything further to get your app up an running. Simply write good code and refresh your site in the browser window.
The only other thing is viewing errors. Please do NOT modify the file located at server/index.js until you get to the optional fullstack part of the exercise.





---
# (not for this week) If you want to take it to the next level, and work on your fundamentals across the full stack, continue on through as many steps as you can:

1. Modify the express.js server to send the sample data to your front end when a GET request is made to you server's `/groceries` route
2. Create a MySQL database called `grocery_db` with one table called `groceries`. Insert the mock data into your `groceries` table so you can query those groceries using the database console
3. Within your express server, add a MySQL connection in your database such that, when a GET request is made to your `/groceries` express endpoint, grocery data is queried from your `grocery_db`
4. Update your front end and server to send/handle POST requests which add additional groceries or update the quantity of the grocery as you change it on the front end.
5. Refactor your database to create a `food_categories` table, containing 5-10 categories of food. Ensure your `groceries` table relates to the `food_categories` table such that every grocery belongs to a `food_category`
6. Refactor your server to query for `groceries`, joining `food_category`. Send back data that contains food_category for every grocery item
7. Refactor your front end to contain the food category alongside the rest of the rendered data
