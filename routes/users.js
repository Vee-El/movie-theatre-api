const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');

const express = require('express');
const router = express.Router();
const User = require('../models/user');

app.use('/users', usersRouter);
app.use('/shows', showsRouter);

// Get all users from the database
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).send('Server Error');
    }
});

// Get one user by id from the database
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).send('Server Error');
    }    
});


// Get all shows watched by a user from the database
router.get('/:id/shows', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const shows = await Show.find({ _id: { $in: user.shows } });

      res.json(shows);
      
    } catch (err) {
      res.status(500).send('Server Error');
    }
});
  
// Update and add a show for a user in the database
router.put('/:id/shows', async (req, res) => {
    try {
        const { id } = req.params;
        const { show } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the show to the user's watchedShows array
        user.watchedShows.push(show);

        // Update the user in the database
        const updatedUser = await user.save();

        res.json(updatedUser);

    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
