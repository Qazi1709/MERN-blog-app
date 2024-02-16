import express from "express";
import config from "config"
import bodyParser from "body-parser";
import dbConnect from "./dbConnect.js";


const app = express();
const port = config.get("PORT");
dbConnect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express Server is Up And Running!");
});




app.listen(port, () => {
    console.info("Server is Running on", port);
});

