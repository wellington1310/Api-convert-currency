const express = require('express');
const app = express();
const fetch = require('cross-fetch');
const cors = require('cors');


app.use( cors({
    origin: "https://beamish-crostata-c84b79.netlify.app"
}))


app.use("/" , (req,res)=>{
    res.send("Server running...")
})



app.post("/convert", express.json(), (req, res) => {


    //  console.log(req.body);

    const from = req.body.from
    const to = req.body.to
    const amount = req.body.amount



    const myHeaders = new Headers();
    myHeaders.append("apikey", "9iUKrNBgB1RRCH8BeFt2il92lKxdAxWd");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };


    fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => {
            console.log(response, "response");
            return response.text()
        })
        .then(result => {
            console.log(result, "result");
            res.send(JSON.stringify(result))
        })
        .catch(error => console.log('error', error));




})




app.listen(3000, (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("Server running...");
    }

})

