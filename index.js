require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'));

const vote = require('./controllers/votingpage');
const httpMsg = require('./controllers/httpmessages');
const login = require('./controllers/loginuser');
const register = require('./controllers/registeruser');
const pParty = require('./controllers/dashboardcontroller')

app.post('/register',(req,res)=>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    register.registerUser(req, res, reqBody);

  });
})

app.post('/login',(req,res) =>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    login.loginUser(req, res, reqBody);

  });
});



app.post('/affirm',(req,res) =>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    vote.uservoted(req, res, reqBody);

  });
});




app.post('/castvote',(req,res) =>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    vote.castVote(req, res, reqBody);

  });
});

app.get('/getparties',(req,res) =>{
  vote.getParties(req, res);

});

app.get('/getpoliticalparties',(req,res) =>{

  pParty.getPoliticalParty(req, res);

});

app.post('/getpoliticalpartyvotes',(req,res) =>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    pParty.getPoliticalPartyVotes(req, res, reqBody);

  });
});



app.post('/getpercentage', (req,res) =>{

  let reqBody = '';

  req.on('data', function (data) {

    reqBody += data;

    if (reqBody.length > 1e7) {

      httpMsg.show413(req, res);

    }

  });

  req.on('end', function () {

    pParty.getPercentage(req, res, reqBody);

  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})