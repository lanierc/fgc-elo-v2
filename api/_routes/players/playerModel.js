"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model: Team } = require("../teams/teamModel");
const playerSchema = new Schema({
  tag: {
    type: String,
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Team,
  },
  realName: String,
  country: String,
  twitter: String,
  twitch: String,
  instagram: String,
  controller: String,
});

exports.model = mongoose.model("Player", playerSchema);
