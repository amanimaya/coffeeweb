const mongoose = require("mongoose");

const cafeInfoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    googleMapsLink: {
      type: String,
      required: true,
    },

    openingHours: {
      type: String,
      required: true,
    },

    instagram: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    tiktok: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    heroImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CafeInfo",
  cafeInfoSchema
);