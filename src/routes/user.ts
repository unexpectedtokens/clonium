import express, { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router: Router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const username: string = req.body.username;
  const password: string = req.body.password;
  try {
    let newUser = {
      username,
      email,
      password,
      tokens: []
    };
    newUser.password = await bcrypt.hash(newUser.password, 8);
    const token = await jwt.sign(
      { username: newUser.username },
      process.env.JWT_SECRET
    );
    newUser.tokens = newUser.tokens.concat(token);
    res.send(newUser);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});
console.log(process.env.JWT_SECRET);
export default router;
