const express = require('express');
const prisma = require('./prisma/client');

const app = express()
const port = process.env.PORT || 3000;


app.get('/company-info', async (req, res) => {
  const { q } = req.query;

  if(!q) {
    return res.send({
      boycott: false,
    })
  }

  const boycottCompany = await prisma.ethicalboycott_domain.findFirst({
    where: {
      domain_name: q,
      archived: false,
    },
    include: {
     ethicalboycott_company: true,
    }
  }) 


  if(boycottCompany) {
    return res.send({
      boycott: true,
      name: boycottCompany.ethicalboycott_company.name,
      justification: boycottCompany.ethicalboycott_company.justification,
      twitter: boycottCompany.ethicalboycott_company.twitter,
      source: boycottCompany.ethicalboycott_company.source_url,
    })
  }

  res.send({
    boycott: false,
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})