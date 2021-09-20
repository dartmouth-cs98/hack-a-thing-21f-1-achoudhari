import app from "express";
import { createServer } from "http";
import cors from "cors";
import io from "socket.io";

const App = app();
const Server = createServer(App);

const IO = io(Server, { cors: {
  origin: "*",
  methods: ["GET", "POST"]
}})

App.use(cors());

const PORT = process.env.PORT || 5000;

App.get("/", (req, res) => {
  res.send(`Server is running`);
});

Server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));