const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');

app.use('/users', usersRouter);
app.use('/shows', showsRouter);

router.get('/', async (req, res) => {
    // Get all users from the database
});

router.get('/:id', async (req, res) => {
    // Get one user by id from the database
});

router.get('/:id/shows', async (req, res) => {
    // Get all shows watched by a user from the database
});

router.put('/:id/shows', async (req, res) => {
    // Update and add a show for a user in the database
});
