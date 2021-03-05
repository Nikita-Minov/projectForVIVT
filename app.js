const express = require('express');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();
const port = 5000;

let user = {};

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {title: 'Главная'})
})

app.get('/register', (req, res) => {
  res.render('register', {title: 'Регистрация'})
})

app.get('/login', (req, res) => {
  res.render('login', {title: "Авторизация"})
})

app.get('/subscribe', (req, res) => {
  res.render('subscribe', {title: 'Подписка'})
})

app.post("/register", urlencodedParser, (req, res) => {
  user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  console.log(user);
  res.redirect('/');
})

app.post("/login", urlencodedParser, (req, res) => {
  if(user.email == req.body.email && user.password == req.body.password) {
    console.log('Вход успешен!');
    res.redirect('/');
  } else {
    console.log('Вход не удался!');
    res.redirect('/login')
  }
  
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
