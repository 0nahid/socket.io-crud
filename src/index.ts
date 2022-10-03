import colors from "colors";
import "dotenv/config";
import http from "http";
import { Server as WebSocketServer } from "socket.io";
import { app } from "./app";
import dbConnect from "./Utils/dbConnect";

const port: string | number = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new WebSocketServer(server, {
  cors: {
    origin: "*",
  },
});

const startServer = async (): Promise<void> => {
  try {
    await dbConnect();
    server.listen(port, () => {
      console.log(colors.red(`Server is running on port ${port}`));
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
