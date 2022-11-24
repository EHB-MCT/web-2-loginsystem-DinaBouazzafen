const express = require('express')
const app = express()
const cors = require('cors')

let users= [];

app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(express.json())


app.post('/register',async (req,res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).send("Gurllll u didn't give me a name, email or password");
        return;
    }

    try {

        let user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };

        users.push(user);

        res.status(201).send("yes! u did it!! just like dora ;))");
        console.log(users);
        

    } catch (error) {
        res.status(500).send("oopsie doopsie, there's an error, try again pls");
    }  
});

app.post('/login',async (req,res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send("Gurllll u didn't give me an email or password");
        return;
    }

    try {
        if( users.find(e => e.email == req.body.email) && users.find(e => e.password == req.body.password)){
            res.status(201).send("login was succesfully given gurl");
            return; 
        } else {
            res.status(400).send("mmmmm we didn't found u in ze system");
        }
        

    } catch (error) {
        res.status(500).send("oopsie doopsie, there's an error, try again pls");
    }  
});

app.listen(3003);
console.log("app running at http://localhost:3003");
