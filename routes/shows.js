const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');

app.use('/users', usersRouter);
app.use('/shows', showsRouter);

router.get('/', async (req, res) => {
    // Get all shows from the database
});

router.get('/:id', async (req, res) => {
    // Get one show by id from the database
});

router.get('/genre/:genre', async (req, res) => {
    // Get all shows of a particular genre from the database
});

router.put('/:id/status', async (req, res) => {
    // Update the status of a show in the database
});

router.delete('/:id', async (req, res) => {
    // Delete a show from the database
});