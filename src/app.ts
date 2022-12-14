import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import path from "path";
const app: Application = express();

/* middleware  */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.set('view engine', 'ejs');

/* here will be all the imports routes */

import userRoute from "./Routes/userRouter";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  res.render("../public/index.ejs");
});

/* Here is the User Routes */
app.use("/api/v1/users", userRoute);

// 404 response
app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    message: "Not Found",
    status: 404,
  });
});
export { app };
