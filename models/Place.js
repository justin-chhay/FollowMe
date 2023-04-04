// models/Place.js

const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  location_name: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  view: {
    type: String
  },
  hasWater: {
    type: Boolean
  },
  isUrban: {
    type: Boolean
  },
  climate: {
    type: String
  },
});

module.exports = Place = mongoose.model('place', PlaceSchema);