const path = require(`path`);
const express = require(`express`);
const hbs = require(`hbs`);
const PORT_APP = 3001;

const app = express();

// Define path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static server
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Harry Potter'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About page!',
    name: 'Chris'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page!',
    name: 'Hello Help)'
  });
});

app.get('', (req, res) => {
  res.send('');
});

app.get('/weather', (req, res) => {
  res.send('Weather page!');
});


app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Oops, Sorry!'
  })
});

app.listen(PORT_APP, () => {
  console.log(`Server is run on port ${PORT_APP}`);
});
