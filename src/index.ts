import express, { Request, Response, Application, NextFunction } from "express";
import userRouter from "./routes/user";
import dotenv from "dotenv";
import path from "path";

const publicPath = path.resolve(__dirname, "../client/build");
const appLocation: string = __dirname + "../client/build/index.html";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.static(publicPath));
app.use(express.json());
//routes
app.use("/users", userRouter);

//mainroute
app.get("/", (req: Request, res: Response) => {
  res.sendFile(appLocation);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
console.log(process.env.JWT_SECRET);
