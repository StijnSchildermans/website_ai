const express = require('express');
const path = require('path');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = new express();
const port = process.env.PORT || "8000";

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(request,response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/expertise', function(request,response) {
  response.sendFile(path.join(__dirname, '/specialisaties.html'));
});

app.get('/contact', function(request,response) {
  response.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('/vacatures', function(request,response) {
  response.sendFile(path.join(__dirname, '/vacancies.html'));
});

app.get('/resources/:file', function(request,response) {
  response.sendFile(path.join(__dirname, '/resources/' + request.params.file));
});


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'website.questions.remarks@gmail.com',
    pass: 'Paddenstoel586'
  }
});

app.post('/sendemail', function(request,response) {
  var naam = request.body.Name;
  var email = request.body.Email;
  var subject = request.body.Subject;
  var body = request.body.Body;
  var mailOptions = {
    from: email,
    to: 'georges@a-i-electro-technics.be',
    subject: subject,
    text: "Afzender: " + naam + "\nE-mailadres: " + email + "\n\n Vraag/opmerking:\n" + body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
