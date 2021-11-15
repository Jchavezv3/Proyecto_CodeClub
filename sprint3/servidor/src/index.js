import express from "express";
import cors from "cors";
import Routes from "./routes/index.js";

const app = express();
app.set("port", 8080);

app.use(express.json());
app.use(cors({
    "origin": "http://localhost:3000"
}));

app.get("/", (req, resp) => {
    resp.json("welcome");
});
app.use("/api", Routes);

app.listen(app.get("port"), () => {
    console.log(`server listening on port ${app.get("port")}`); 
});