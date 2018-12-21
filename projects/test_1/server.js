require('dotenv').config();

const
    express = require('express'),
    app = express(),
    axios = require('axios'),
    ejsLayouts = require('express-ejs-layouts'),
    PORT = 3000

// builds an object that can make HTTP requests:
const apiClient = axios.create()

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.get("/posts", (req, res) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    apiClient({ method: "get", url: apiUrl }).then((apiResponse) => {
      res.render('posts.ejs', {apiResponse})
    })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}.`)
})