"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  abbreviation: {
    type: String,
    required: true,
  },
  website: String,
  twitter: String,
});

exports.model = mongoose.model("Team", teamSchema);
