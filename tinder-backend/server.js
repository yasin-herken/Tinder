import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbCards.js";
import Cors from 'cors';
import KEY from './config.js';
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:"+KEY+"@cluster0.fqoqru3.mongodb.net/tinderdb?retryWrites=true&w=majority";
// Middlewares
app.use(express.json());
app.use(Cors());
// DB config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error=>console.log(error));
// API Endpoints
app.get('/',(req,res) =>{

    return res.status(200).send('HELLO CLEVER PROGRAMMERS!!!');
})

app.post('/tinder/cards',(req,res) =>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})
app.get('/tinder/cards',(req,res) =>{
    const dbCard = req.body;
    Cards.find(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})
// Listener
app.listen(port,()=>console.log("listening"+port));