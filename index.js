const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.send("Chatbot Delivery! :)");
})

app.post("/webhook", (req, res) => {
    console.log("Webhook");
    console.log("Body", req.body.queryResult);
})





const port = process.env.PORT || 3000;
const hostname = "127.0.0.1"

//app.listen(port, err = {
app.listen(port, hostname, () => {
    console.log(`server listen on http://${hostname}:${port}`);
})
