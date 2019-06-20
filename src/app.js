const path = require(`path`);
const express = require(`express`);
const PORT_APP = 3001;

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.send('');
});

app.get('/weather', (req, res) => {
  res.send('Weather page!');
});

app.listen(PORT_APP, () => {
  console.log(`Server is run on port ${PORT_APP}`);
});
