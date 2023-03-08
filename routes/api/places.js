// routes/api/places.js

const express = require('express');
const router = express.Router();

// Load Place model
const Place = require('../../models/Places');

// @route GET api/places/test
// @description tests places route
// @access Public
router.get('/test', (req, res) => res.send('place route testing!'));

// @route GET api/places
// @description Get all places
// @access Public
router.get('/', (req, res) => {
  Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(404).json({ noplacesfound: 'No places found' }));
});

// @route GET api/places/:id
// @description Get single place by id
// @access Public
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
    .then(place => res.json(place))
    .catch(err => res.status(404).json({ noplacefound: 'No place found' }));
});

// @route GET api/places
// @description add/save place
// @access Public
router.post('/', (req, res) => {
  Place.create(req.body)
    .then(place => res.json({ msg: 'place added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this place' }));
});

// @route GET api/places/:id
// @description Update place
// @access Public
router.put('/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body)
    .then(place => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/places/:id
// @description Delete place by id
// @access Public
router.delete('/:id', (req, res) => {
  Place.findByIdAndRemove(req.params.id, req.body)
    .then(place => res.json({ mgs: 'place entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a place' }));
});

module.exports = router;