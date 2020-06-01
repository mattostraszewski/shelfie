require('dotenv').config();
const express = require('express'),
  ctrl = require('./controller'),
  massive = require('massive'),
  app = express(),
  { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json())

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {

  app.set('db', db)
  console.log("DB connected!")
}).catch(error => {
  console.log(error)
})

app.get('/api/inventory', ctrl.getProducts)

app.post('/api/product', ctrl.createProduct)

app.delete('/api/product/:product_id', ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Welcome to port ${SERVER_PORT}`))