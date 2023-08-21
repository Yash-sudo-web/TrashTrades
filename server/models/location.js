const mongoose = require("mongoose");

// Define the schema for the waste collection locations
const locationSchema = new mongoose.Schema({
  wasteTypes: {
    locations: {
      type: [String],
      required: true,
    },
    recyclables: {
      days: {
        type: [String], // Array of weekday names
        required: true,
      },
      times: {
        type: [String], // Array of time strings in "h:mmam/pm" format
        required: true,
      },
    },
    nonRecyclables: {
      days: {
        type: [String], // Array of weekday names
        required: true,
      },
      times: {
        type: [String], // Array of time strings in "h:mmam/pm" format
        required: true,
      },
    },
    hazardousWaste: {
      days: {
        type: [String], // Array of weekday names
        required: true,
      },
      times: {
        type: [String], // Array of time strings in "h:mmam/pm" format
        required: true,
      },
    },
    organicWaste: {
      days: {
        type: [String], // Array of weekday names
        required: true,
      },
      times: {
        type: [String], // Array of time strings in "h:mmam/pm" format
        required: true,
      },
    },
  },
});

// Define the Location model using the schema
const Location = mongoose.model("Location", locationSchema);

module.exports = { Location };

