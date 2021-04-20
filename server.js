const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db');

dotenv.config({path:'./config/config.env'});
const app=express();
const PORT=process.env.PORT || 5000;

connectDB();
//Body parser
app.use(express.json());

//Enable cors
app.use(cors());
//set static folder
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/api/v1/crimes',require('./routes/crimes'));

app.listen(PORT,()=>{
    console.log(`server listening in ${process.env.NODE__ENV} mode on port ${PORT}`);
});