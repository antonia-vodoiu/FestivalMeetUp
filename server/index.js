const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json())
app.use(cors())
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'usersdb'
})

//register route
app.post('/register', (req, res)=>{
    //get variables from form
    const sentEmail = req.body.Email
    const sentUsername = req.body.Username
    const sentPassword = req.body.Password  

    bcrypt.hash(sentPassword, saltRounds, function(err, hash) {
        if(err) {
            res.send(err);
        } else {
            const SQL = 'INSERT INTO users (Email, Username, Password) VALUES(?, ?, ?)';
            const Values = [sentEmail, sentUsername, hash];
            db.query(SQL, Values, (err, results) => {
                if(err){
                    res.send(err);
                } else {
                    console.log('User Inserted Successfully!');
                    res.send({message: 'User added'});
                }
            });
        }
    });
});

//login
app.post('/login', (req, res) => {
    const sentLoginUsername = req.body.LoginUsername
    const sentLoginPassword = req.body.LoginPassword;
    const SQL = "SELECT * FROM users WHERE username = ?"
    const Values = [sentLoginUsername, sentLoginPassword];
    db.query(SQL, Values, (err, results) => {
        if(err){
            res.send({error: err});
        } else if (results.length > 0){
            bcrypt.compare(sentLoginPassword, results[0].password, function(err, result) {
                if(result == true) {
                    res.send(results);
                } else {
                    res.send({message: 'Wrong username/password combination'});
                }
            });
        } else {
            res.send({message: 'Username does not exist'});
        }
    });
});