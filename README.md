# sei-group-project-3

General Assembly Project 3: Deutschstagram
==========================
1 week long 3 people group project using React.js, Node.js, Express, MongoDB

Original group project is Vietgram (https://vietgram-ga.herokuapp.com/), I re-designed the app to Germany after the course. Functionally it is identical, but with a lot of the seeds file and nation/translation links changed.

Theme
==========
The concept was to create an instagram-like image sharing board that users can like, comment, follow users and edit their own entries. Additionally, a language option is included for the chat section, where the user can see the chat messages in their selected language.

Controls
===========
Register and Log In to the App.
Select navigation from profile icon on top right:
Find new gems
{image/gems board, where you can see the index, post new gems, edit ones you've made, make comments on gems and delete comments you've made}
{Join a chat will bring you to the chat section, where you can see comments by different users in the language that you prefer, chosen when joining the site. Emoji picker is added so it functions close to the real messaging services}
Log Out option


Node.js
============
The models and controllers are seperated into 3 categories: chats, gems and users. With varying usages of the RESTful routes, since gems would require all the routes while chats and users require less.

Router keeps all the routes of the Backend in one place and so easier to manage.

Environment links all the info from the .env file into variables that can be used.

Error Handler gives all error messages a numbered status and can be applied for all the errors across the Backend.

Logger manages the console.log that informs you of all the backend RESTful requests that are happening while using the site.

Secure Route checks that the Authorization token is present and manages the JSON Web Token through a Promise.

The Seeds file contains all the creative content from user profiles, gems to chats that makes up the pre-filled portion of the site.

React.js
============
Each RESTful path from the backend has its own component which manages the functions and requests on the page. Many have the handleChange and handleSubmit functions that are linked to elements going into render.

The filter Gems option is done almost entirely on React, using the category data from seeds, the Gems are filtered to show only the categories selected.

The Gem component gets referenced directly into Gems and acts as a huge function outside of the component, where the design and references to the seeds file is managed. A crucial part of the whole app.

Auth handles the log in and authentication for the user. Giving a token that expires after a set time when the user log in. Removes the token while logging out.

Chat Show handles a lot of visual presentation that requires authentication and user information, the comment languages is already handled on the backend.

App contains the BrowserRouter which easily manages the switching of different routes.
