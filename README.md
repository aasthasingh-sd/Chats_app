Chat Management App 💬

A backend-focused chat management application built with Node.js,
Express, MongoDB, Mongoose, and EJS.
The project demonstrates how a server-side application can perform
CRUD operations on chat messages stored in MongoDB. Users can view
existing chats, create new chats, edit messages, and delete chats.

🚀 Features
- View all stored chats
- Create a new chat
- Edit an existing chat message
- Delete a chat
- Store chat data in MongoDB
- Render dynamic pages using EJS
- Use Express for server-side routing
- Use Mongoose for MongoDB interaction
- Use Method Override for PUT and DELETE requests
- Serve static files through Express

🛠️ Technologies Used
- Node.js -- JavaScript runtime
- Express.js -- Web application framework
- MongoDB -- Database
- Mongoose -- MongoDB ODM
- EJS -- Server-side templating
- Method-Override -- Enables HTTP methods such as PUT and DELETE
  through forms
- HTML/CSS -- Frontend structure and styling
The project's package.json currently includes Express, EJS, Mongoose,
and Method Override as dependencies.

📂 Project Structure
Chat-Management-App/
│
├── index.js
├── package.json
├── package-lock.json
│
├── models/
│   └── chats.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── public/
│   └── style.css
│
└── README.md

The models, views, and public folders shown above are required
by the current server configuration.

🔄 CRUD Operations
Create
A new chat can be added through:
POST /chats
The application accepts:
- Sender
- Message
- Receiver
- Creation date/time

The new chat is saved to MongoDB using Mongoose.
Read
All chats are retrieved using:
GET /chats
The server fetches the chat documents from MongoDB and renders them
through an EJS view.
Update
The edit page is accessed through:
GET /chats/:id/edit
The updated message is then saved to MongoDB.
Delete
A chat can be removed using:
DELETE /chats/:id
The corresponding MongoDB document is deleted using Mongoose.

🧠 What I Learned
This project helped me practice:
- Creating an Express server
- Connecting Node.js with MongoDB
- Working with Mongoose models
- Creating REST-style routes
- Handling GET, POST, PUT, and DELETE operations
- Using route parameters
- Reading form data with express.urlencoded()
- Rendering dynamic content using EJS
- Using method-override
- Performing MongoDB CRUD operations
- Organizing a backend project into models, views, and public files

⚙️ Installation & Setup
1. Clone the repository
git clone <your-repository-url>
cd <your-repository-folder>
2. Install dependencies
npm install
The repository includes package-lock.json, so npm install can
install the required dependencies.
3. Start MongoDB
The current application connects to a local MongoDB server using:
mongodb://127.0.0.1:27017/whatsapp
Make sure MongoDB is installed and running locally before starting the
application.
4. Start the server
node index.js
You should see messages indicating that the server is running and the
MongoDB connection was successful.
5. Open the application
Visit:
http://localhost:8080/chats
🌐 Available Routes
  Method   Route               Purpose
  GET      /                 Check whether the server is working
  GET      /chats            Display all chats
  GET      /chats/new        Open the new-chat form
  POST     /chats            Create a new chat
  GET      /chats/:id/edit   Open the edit page
  PUT      /chats/:id        Update a chat
  DELETE   /chats/:id        Delete a chat


💾 Database
The application currently uses a local MongoDB database named:
whatsapp
Mongoose is used to establish the connection and perform database
operations.
The server connects to MongoDB through:
mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')

🔐 Important Note for Deployment
This project currently uses a local MongoDB connection. Therefore,
simply uploading the repository to GitHub will not make the
application publicly accessible.
GitHub is being used here for source-code hosting and version
control.
To deploy the actual backend application online, the local MongoDB
connection should be replaced with a cloud database such as MongoDB
Atlas, and the application should be deployed on a Node.js-compatible
hosting platform.
For production deployment, the MongoDB connection string should also be
stored in an environment variable rather than directly inside the source
code.

📌 Current Project Status
Backend CRUD project --- completed for local development.
The project demonstrates the fundamentals of building a database-driven
Express application with MongoDB and EJS.

🔮 Future Improvements
Possible improvements include:
- Add user authentication
- Add user-specific chats
- Add timestamps in a cleaner format
- Add search and filtering
- Add chat categories
- Improve error handling
- Add form validation
- Use environment variables for configuration
- Connect to MongoDB Atlas
- Deploy the application online
- Improve UI/UX and mobile responsiveness

👩‍💻 Author
Aastha Singh
B.Tech CSE (Data Science)
