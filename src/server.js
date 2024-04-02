import express from "express";
import cors from "cors";
import tarefaRoute from "./routes/tarefaRoute.js";
import authRoute from "./routes/authRoute.js";

const server = express();
const PORT = process.env.PORT || 3001;

server.use(cors());
server.use(express.json());
server.use(tarefaRoute, authRoute);

server.listen(PORT, () => {
  console.log("API Started!");
});
