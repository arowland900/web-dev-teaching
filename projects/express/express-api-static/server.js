const
    express = require('express'),
    path = require('path'),
    app = express(),
    PORT = 3000;

// Configurations

// Middleware
var abs = path.join(__dirname, 'public');
console.log(abs);
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile('index.html')
});

app.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});