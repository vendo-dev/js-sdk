import { Client } from './main'

const client = Client({
  host: 'http://localhost:5000/'
})

// client.products.list({
//   page: 1,
//   per_page: 1
// }).then(res => console.log(JSON.stringify(res, null, 2)))

// client.taxons.list({
//   page: 1,
//   per_page: 1
// }).then(res => console.log(JSON.stringify(res, null, 2)))

client.products.show('3').then(res => console.log(res.data.type))
