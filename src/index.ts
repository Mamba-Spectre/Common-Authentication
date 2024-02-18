import express from 'express';
// import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
const http = require('http');
const app = express();

app.use(cors({credentials: true}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);


server.listen(8080,()=>{
    console.log("8080 it is")
});


const MONGO_URL = "mongodb+srv://harshvardhan23007:1b9xPLs1lJaLHlbp@cluster0.xcfexzx.mongodb.net/?retryWrites=true&w=majority"


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error: Error) => console.log(error));
app.use('/',router());