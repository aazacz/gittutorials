const express       = require('express');
const app           = express();
const userRoute     = require('./routes/UserRouter')  // userRouter
const adminRoute    = require('./routes/AdminRouter')
require('dotenv').config()   //env moduole require
const PORT          = process.env.PORT

// const  validate = require('./Authentication/AdminAuthentication')




app.use('/',userRoute)         // User Route
app.use('/admin',adminRoute)   // Admin Route


app.listen(PORT,()=>{ console.log("server is connected to ") })