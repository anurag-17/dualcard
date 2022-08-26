const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  recieved: {
    type: String,
    // required: true,
  },

  Accept: {
    type: String,
    // required: true,
  },
  decline: {
    type: String,
    // default: true,
  },
  player_1: [
    {
      text: {
        type: String,
      },
      images: [
        {
          public_id: {
            type: String,
            // required: true,
          },
          url: {
            type: String,
            // required: true,
          },
        },
      ],

      userId: {
        type: String,
      },
    },
  ],
  player_2: [
    {
      text: {
        type: String,
      },
      images: [
        {
          public_id: {
            type: String,
            // required: true,
          },
          url: {
            type: String,
            // required: true,
          },
        },
      ],
      userId: {
        type: String,
      },
    },
  ],
});

const challenge = mongoose.model("challenge", challengeSchema);
module.exports = challenge;
