const express = require('express');
const request = require('request');

const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();


app.set('view engine', 'hbs');

app.use(express.static(__dirname +'/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentTime: new Date().getFullYear()
  });
});
  /*
  //res.send("<h1>Hello Express</h1>");
  res.send({
    name: 'pyug',
    likes: [
      'basketball',
      'science fiction'
    ]
  });
  */

  app.get('/projects', (req, res) => {
    res.render("projects.hbs", {
      pageTitle: "Projects page",
      bodycontent:  "Here's a list of projects"
    });
  });


app.use((req, res, next) => {
  res.render("maintenance.hbs", {
  pageTitle: 'Maintenance page'
});
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear:  new Date().getFullYear()
  });
});




  //res.send('about page');
  /*
  request({
    url: `https://www.routingnumbers.info/api/data.json?rn=321176804`,
    json: true
  }, (error, response, body) => {
    if (error) {
      res.send('Unable to connect to the service');
      //console.log('Unable to connect to the service');
    } else if (body.status === 'ZERO_RESULTS') {
      res.send('Unable to find that address.');
    } else {
      res.send(`The Bank Name : ${body.customer_name.toString()}`);
    }
  });
  */

app.get('/bad', (req, res)=> {
  res.send({
    errorMessage: 'unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
