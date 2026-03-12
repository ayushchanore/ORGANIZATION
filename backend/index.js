const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const AuthRouter = require("./Routes/AuthRouter")
const DonorRouter = require("./Routes/DonorRouter")

require('./Models/db');
const PORT = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));
app.use('/auth',AuthRouter)
app.use('/donor',DonorRouter)

app.listen(PORT,()=>{
    console.log("server is running");
})