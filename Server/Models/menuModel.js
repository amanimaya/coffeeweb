const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
       required: true,
    },

    best: {
      type: Boolean,
      default: false,
    },

     category: {
      type: String,
      required: true,
      enum: [
        "coffee",
        "brunch",
        "dessert",
        "cold-drink",
        "hot-drink",
        "breakfast",
        "sandwich"
      ]
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", menuSchema);