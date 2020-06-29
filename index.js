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


app.listen(port, err = {
    
});