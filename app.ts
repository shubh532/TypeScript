import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/todos';

const app =express()
app.use(bodyParser.json())
app.use(router)
app.listen(3000)
console.log("shubham")