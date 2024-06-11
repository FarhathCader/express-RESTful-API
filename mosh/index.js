const express = require('express');
const dotenv = require('dotenv');
const Joi = require('joi');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'John', age: 25,email : "johndoe@gmail.com"},
    {id: 2, name: 'Jane', age: 22,email : "johndoe@gmail.com"},
    {id: 3, name: 'Doe', age: 24,email : "johndoe@gmail.com"},
    {id: 4, name: 'Smith', age: 21,email : "johndoe@gmail.com"}
];


app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.get('/api/courses', (req, res) => {
    if(users.length === 0){
        res.status(404).send('No courses found');
        return;
    }
    res.send(users);
    }
);

app.get('/api/courses/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user){
        res.status(404).send('Course not found');
        return;
    }
    res.send(user);
    }
);


app.post('/api/courses', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        age: Joi.number().min(18).required(),
        email: Joi.string().email().required()
    });

    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    };
    users.push(user);
    res.send(user);
    }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port {port}....`);
    }
);