const tf = require("@tensorflow/tfjs");
const cors=require('cors');
const express=require('express');
const axios = require('axios');
const { response } = require("express");
const local_data = require('./test.json')


const port  = 4000
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.post('/predict',async (req,res)=>{
    const model = await tf.loadLayersModel("https://riskfactormodel.s3.amazonaws.com/model.json")
    console.log(model.summary());
    const data = local_data[req.body.Index][req.body.Value]
    const new_data = []
    for(let i=1 ; i<data.length ; i++){
        new_data.push(data[i])
    }
    const x = tf.tensor([new_data])
    const output = model.predict(x)
    const tensorData = output.dataSync();
    res.json(tensorData[0])
    
})





app.listen(port , ()=>
{
    console.log("Server running suucessfully")
}
)

// const predict =  function(company_name){
//     const model = tf.loadLayersModel(
//         fetch("https://riskfactormodel.s3.amazonaws.com/model.json")
//         .then(response => response.json()
//         .then(data => data)
//     ))

//     console.log(model.summary())
//     const x = tf.tensor([company_name])
//     const output = model.predict(x)
//     const tensorData = output.dataSync();
//     console.log(tensorData[0])
//     return tensorData[0]
// }

