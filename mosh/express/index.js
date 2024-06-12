const express = require('express');
require('dotenv').config();
const startupdebug = require('debug')('app:startup');
const dbdebug = require('debug')('app:db');
const {schema} = require('./validations/courseValidation');
const app = express();

app.set('view engine', 'pug'); 

app.use(express.json());

const users = [
    {id: 1, name: 'John', age: 25,email : "johndoe@gmail.com"},
    {id: 2, name: 'Jane', age: 22,email : "johndoe@gmail.com"},
    {id: 3, name: 'Doe', age: 24,email : "johndoe@gmail.com"},
    {id: 4, name: 'Smith', age: 21,email : "johndoe@gmail.com"}
];

if(app.get('env') === 'development'){
    startupdebug('Morgan enabled');
}

app.get('/', (req, res) => {
    // res.send('Hello World');
    // }

    res.render('index', {title: 'My Express App', message: 'Hello'});
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


app.put('/api/courses/:id', (req, res) => {

    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user){
        res.status(404).send('Course not found');
        return;
    }
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    user.name = req.body.name;
    user.age = req.body.age;
    user.email = req.body.email;
    res.send(user);
    }
);


app.delete('/api/courses/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if(!user){
        res.status(404).send('Course not found');
        return;
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(user);
    }
);

dbdebug('Connected to the database....');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
    }
);