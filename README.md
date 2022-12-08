Spicy Chat is a private chat application creates HTTP server and uses Socket.io. 

CS411 Project 2 - Spicy Chat | Instant Message Private Chat Application
Project Structure:
This project is implemented with Socket.io, Node.js and Vue.js. For the back-end and front-end are separated as backend and src.

Preparation
Make sure you have node.js and npm installed in your computer. The project uses directly socket.io, therefore there is no need for any installation.

Running the code
Go to the project directory after cloning.
Then, open a terminal at directory 'spicy-chat/' and run the command "npm run serve" for the frontend.
Then, open a new terminal without closing the previous one at directory 'spicy-chat/backend' and run the command "npm run start" for the backend.
Then, open a browser and go to "localhost:8080". At the same time, open incognito tab of the browser (or another browser) and again, go to "localhost:8080".

Enter different usernames for the both tab and login application.
If you want to reset the session, F12->Application->Local Storage->Delete sessionID and refresh the page. After that, you can login with another user name.
To test instant messaging, click one of the online names that has already opened on another tab (incognito or another browser).
