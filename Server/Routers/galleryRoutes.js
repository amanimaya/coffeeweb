const express = require("express");

const router = express.Router();

const upload = require(
  "../middlewares/upload"
);

const galleryController = require(
  "../Controllers/galleryController"
);

router.post(
  "/",
  upload.single("image"),
  galleryController.createGalleryItem
);

router.get(
  "/",
  galleryController.getGallery
);

router.delete(
  "/:id",
  galleryController.deleteGalleryItem
);

module.exports = router;