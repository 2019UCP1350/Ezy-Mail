const express = require("express");
const app=express();
const cors=require('cors')
const authRoute = require('./routes/auth');
const path=require("path");


const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
 },()=>console.log('connected to db'));
//middlewaew
app.use(express.json());
app.use(cors())
app.use('/',authRoute);

if (process.env.NODE_ENV==="production"){
	app.use(express.static("client/build"));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	  });
}

app.listen(process.env.PORT || 3001,function(){
    console.log("server running on 3001");
});
