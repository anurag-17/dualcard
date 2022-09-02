const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  recieved: {
    type: String,
    // required: true,
  },

  Accept: {
    type: String,
    default:false
    // required: true,
  },
  decline: {
    type: String,
    default:false,
  },

  player_1_id:{
type:String
  },
  player_2_id:{
    type:String
  },

  player_1:[
    {
      text: {
        type: String,
      },
      link:{
        type:String
      },
      images:{
            type:Array,
            // required: true,  
        },
        
      userId: {
        type: String,
      },
      name:{
        type:String
      }
    },
  ],
  player_2: [
    {
      text: {
        type: String
      },
      link:{
        type:String
      },
      images:{
        type:Array,
        // required: true,  
    },
      userId: {
        type: String
      },
      name:{
        type:String
      }
    },
  ],
});

const challenge = mongoose.model("challenge", challengeSchema);
module.exports = challenge;
