const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define routes
app.use('/users', require('./routes/users'));
app.use('/shows', require('./routes/shows'));

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});