const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb+srv://lachlan:S7IVK8K3fULmRzQW@musclestrain-kwvzb.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.post('/postUser', (req, res) => {
    let data = new Data();

    const { username, password, email } = req.body;

    data.username = username;
    data.password = password;
    data.email = email;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
      });
});

router.post('/loginUser', (req, res) => {

    username = req.body.username;
    password = req.body.password;

    valid = null;

    Data.findOne({username}).then(user => {
      if(!user){
        return res.status(404).json({ usernotfound: "Username not found"})
      } else if(password === user.password){
        return res.send(user)
      } else {
        return res.status(400).json({ incorrectpassword: "Your password was incorrect"})
      }
    })
        

})

app.use('/api', router)

app.listen(API_PORT, () => console.log(`LISTENING ON PORT: ${API_PORT}`))