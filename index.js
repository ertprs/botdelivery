const express = require("express");
const bodyParser = require("body-parser");

const Model = require("./model/index.js");

const app = express( );

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Chatbot Delivery");
})

app.post("/webhook", (req, res) => {
    const mensagem = req.body.queryResult.queryText;
    const intencao = req.body.queryResult.intent.displayName;
    const parametros = null;
    let responder ="req.body.queryResult.parameters"

/*if (req.body.queryResult.parameters && req.body.queryResult.parameters.nao_vendemos) {
    reponder = "Poxa, não vendemos" + req.body.queryResult.parameters.nao_vendemos + ". "
    console.log("responder", responder)
}*/

switch(intencao) {
    case "VerCardapio":
        resp = Model.verCardapio( mensagem, parametros );
        break;
    default:
        resp = { tipo: "texto", mensagem: "Sinto muito, não entendi o que você quer" }
}

if (resp.tipo == "text") {
    const resposta = {
        "fulfillmentText": "Resposta do Webhook",
        "fulfillmentMessage": [
            {
                "text": {
                    "text": [
                        res.mrnsagem
                    ]
                }
            }
        ],
        "source": "",
    }
}

res.send(resposta);
})


const port = process.env.PORT || 3000;
const hostname = "127.0.0.1"

app.listen(port, hostname, () => {
    console.log(`server listen on http://${hostname}:${port}`);
})