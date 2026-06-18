const Gallery = require("../Models/galleryModel");

const createGalleryItem = async (data) => {
  return await Gallery.create(data);
};

const getGallery = async () => {
  return await Gallery.find().sort({
    createdAt: -1,
  });
};

const deleteGalleryItem = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};

module.exports = {
  createGalleryItem,
  getGallery,
  deleteGalleryItem,
};