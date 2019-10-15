"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const publicPath = path_1.default.resolve();
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.PORT || 5000;
//routes
app.use("/user", user_1.default);
//mainroute
app.get("/", (req, res) => {
    res.send("hello cunt");
});
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
