const express = require("express");
const app = express();
const cors = require("cors");
//the code down below lets us use the json without parsing which we are using in ./routes/Posts.js in get and post. We are direcly sending json from insomnia.
app.use(express.json());

//this will help us to connect server(backend) to client
app.use(cors());

//we are creating a database now
// models represents database and posts inside models is a class.
const db = require("./models");

//Routers

const postRouter = require("./routes/Posts");
//now we are creating a route for path:./routes/Posts
app.use("/posts", postRouter);


const commentRouter = require("./routes/Comments");
//now we are creating a route for path:./routes/Posts
app.use("/comments", commentRouter);

const usersRouter = require("./routes/Users");
//now we are creating a route for path:./routes/Posts
app.use("/auth", usersRouter);



//we are using promise now to ensure only after the database is connected, the display message(Server is ... :3001) is displayed.
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on port: 3001");
  });
});
