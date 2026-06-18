const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "coffee",
        "brunch",
        "dessert",
        "interior",
        "events"
      ],
      default: "coffee",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Gallery",
  gallerySchema
);