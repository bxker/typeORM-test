import "reflect-metadata";
import express from 'express';
import { createUser, findUser } from './functions/helper'

const app = express();
app.use(express.json())

app.post('/user/create', createUser);
app.get('/user/:id', findUser)

app.listen(4000, () => console.log(`Server listenting on port 4000`));


