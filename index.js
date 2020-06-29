const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Chatbot Delivery! :)");
})

app.get("/ask", (req, res) => {
    console.log(req.query);
    res.send("Rota funcionando Ok!");
})

app.post("/ask", (req, res) => {
    console.log(req.body);
    res.send("mensagem recebida");
})





const port = process.env.PORT || 3000;
const hostname = "127.0.0.1"

//app.listen(port, err = {
app.listen(port, hostname, () => {
    console.log(`server listen on http://${hostname}:${port}`);
})