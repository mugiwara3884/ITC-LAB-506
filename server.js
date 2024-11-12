const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files like CSS and JS
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/itc505/lab-6/index.html', (req, res) => {
    res.render('index', { title: 'Holy Grail Layout', date: new Date().toLocaleString() });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
