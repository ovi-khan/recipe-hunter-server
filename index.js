const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/chefData.json');
const recipeData = require('./data/recipeData.json') 

app.use(cors())

app.get('/', (req, res) => {
  res.send('Data API is running')
})

app.get('/chefData', (req, res) => {
  res.send(chefData)
})

app.get('/recipeData', (req, res) => {
  res.send(recipeData)
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

app.get('/recipeData/:id', (req, res) => {
  const id = req.params.id;
  const selectRecipe = recipeData.filter(recipes => recipes.id == id)
  if(selectRecipe) {
    res.send(selectRecipe)
  } else {
    res.status(404).send('recipes not found')
  }
})

app.listen(port, () => {
  console.log(`Data API is running on port: ${port}`);
});
