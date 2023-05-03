// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 5000;

// const chefData = require('./data/chefData.json');

// app.use(cors())

// app.get('/', (req, res) => {
//     res.send('data is running')
// })

// app.get('/chefData', (req, res) => {
//     res.send(chefData)
// })
// app.get('/chefData/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const selectChef = chefData.find(c => c.id === id)
//     res.send(selectChef)
// })

// app.listen(port, () => {
//     console.log(`Data Api is running on port: ${port}}`)
// })

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Data API is running')
})

app.get('/chefData', (req, res) => {
  res.send(chefData)
})

app.get('/chefData/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find(chef => chef.id == id);

  if (selectedChef) {
    res.send(selectedChef);
  } else {
    res.status(404).send('Chef not found');
  }
})

app.listen(port, () => {
  console.log(`Data API is running on port: ${port}`);
});
