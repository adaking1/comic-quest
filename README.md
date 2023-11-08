# Comic Quest

![Alt text](/assets/images/image.png)   

## Table of Contents
-[Description](#description)  
-[Installation](#installation)  
-[Usage](#usage)  
-[Contributing](#contributing)   
-[Credits](#credits)  
-[License](#license)  
-[Questions](#questions)

## Description
This application was created for comic enthusiasts to have a place online to talk about their favorite comics with other enthusiasts. This app lets you check out the latest comic book releases where you can add, delete, and update comments while you are logged in. This application is a great way for children to be introduced to social media since it is about a specified topic, the UI is simple to use, and parents will be able to easily teach good internet etiquette. This project makes use of node.js, and the npm packages: express.js to run our server, bcrypt to encrypt passwords, validator to normalize inputted email addresses, sequelize and mysql2 to communicate with our database, dotenv to protect the sensitive data in our code, express-handlebars to provide us with a front-end template framework, express-session and connect-session-sequelze to allow the ability for the user to log in and out, and helmet as an added layer of protection for our entire webpage by giving us access to 15 express middlewares, each of which takes care of setting an http security header.

## Installation
To install this application, simply go to its url here: [Click to go to application](https://fast-spire-60504-c09eefa67524.herokuapp.com/)

## Usage
After going to the application's url, the homepage will render, displaying three featured comics. From there you can use the search bar to look up any comic. If that comic is in the database, you will be brought to a page that displays that single comic with a description, author, and date published. It will also say that you can only view comments while logged in. You can also get to the single comic page by clicking on a featured comic on the homepage, where you will be directed to that featured comics solo page. To log in, click on the "login" button. You will be brought to the login page where you can login using your email and password if you have already signed up. If you need to sign up, fill out the form below the login form labeled "Sign Up" by entering your name, email, and password. Once logged in, you can view and add comments to any comic of your choosing. To leave a comment, enter text into the input field next to the button that says "Add Comment", then press that button to submit it. You will then see the page with your comic added where you can delete that comment by pressing the delete button, or update that comment by pressing the update button. When you press the update button, a text input will appear where you can replace your comment with a new or updated comment. To view your profile page, press the "Profile" button in the nav bar while logged in. This page will display your username and email with options to update both. If you choose to update either, after you press the update button a text input field appears where you can enter a new name or email. After you click the save button, your new name or email is saved to the database. To get to the homepage, press the "Home" button in the nav bar or click on the title "Comic Quest". To log out, press the "Logout" button or remain idle on the page until the cookie expires after 500 seconds.

## Contributing
To contribe, fork the project, create a branch to work on, edit that branch, and then create a pull request. If the edits are approved, your contributions will be added.

## Credits
This application was created by Adam King, Xing Cantres, and Piero Rodriguez. It also uses references from a Uconn web development bootcamp in the following repo: https://git.bootcampcontent.com/University-of-Connecticut/CONN-VIRT-FSF-PT-07-2023-U-LOLC.git. There also references to the documentation for each of the npm packages used.

## License
This project is not protected under any license.


## Questions
To view more of my work, view my GitHub profile: [adaking](https://github.com/adaking1)

If you have any questions about this project please email me here: kinga1215@yahoo.com

