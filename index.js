const express = require('express')
const app = express()
const port = 3000


app.get('/company-info', (req, res) => {
  const { q } = req.query;

  console.log(q);

  if(q.includes('airbnb')){
    res.send({
      name: 'Airbnb',
      justification: 'Airbnb are a subsidiary of Bookings Holding Inc who profit from listing illegal settlement properties in Occupied Palestinian territories',
      source: "https://undocs.org/en/A/HRC/43/71",
      twitter: '@airbnb'
  })
    return;
  } else {
    res.send({
      boycott: false,
    })
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})