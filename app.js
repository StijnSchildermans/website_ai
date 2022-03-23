const express = require('express');
const path = require('path');

const app = new express();
const port = process.env.PORT || "8000";

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


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
