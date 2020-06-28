"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const playerSchema = new Schema({
  tag: {
    type: String,
    required: true,
  },
  realName: String,
  country: String,
  twitter: String,
  twitch: String,
  instagram: String,
  controller: String,
});

exports.model = mongoose.model("Player", playerSchema);
