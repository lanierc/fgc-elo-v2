"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model: Player } = require("../players/playerModel");
const tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  date: Date,
  bracket: String,
  results: [
    {
      place: Number,
      player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Player,
      },
    },
  ],
  replay: String,
});

exports.model = mongoose.model("Tournament", tournamentSchema);
