const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');
const router = express.Router();
const Show = require('../models/show');


app.use('/users', usersRouter);
app.use('/shows', showsRouter);

// Gets all shows from the database
router.get('/', async (req, res) => {
    try {
      const shows = await Show.find();
      res.json(shows);
    } catch (err) {
      res.status(500).send('Server Error');
    }
});  

// Gets one show by id from the database
router.get('/:id', async (req, res) => {
    try {
        const show = await Show.findById(req.params.id);
        if (!show) {
          return res.status(404).json({ message: 'Show not found' });
        }
        res.json(show);
    } catch (err) {
        res.status(500).send('Server Error');
    }    
});

// Gets all shows of a particular genre from the database
router.get('/genre/:genre', async (req, res) => {
    try {
        const shows = await Show.find({ genre: req.params.genre });
        res.json(shows);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Updates the status of a show in the database
router.put('/:id/status', async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const updatedShow = await Show.findByIdAndUpdate(id, { status }, { new: true });
  
      if (!updatedShow) {
        return res.status(404).send('Show not found');
      }
  
      res.json(updatedShow);

    } catch (err) {
      res.status(500).send('Server Error');
    }
});

// Deletes a show from the database

router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;

      await Show.deleteOne({ _id: id });  

      res.status(200).send(`Show with ID ${id} has been deleted.`);
      
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });
  
module.exports = router;