const galleryService = require(
  "../Services/galleryService"
);

const cloudinary = require(
  "../config/cloudinary"
);

const streamifier = require(
  "streamifier"
);

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream =
      cloudinary.uploader.upload_stream(
        {
          folder: "gallery",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

    streamifier
      .createReadStream(buffer)
      .pipe(stream);
  });
};

const createGalleryItem = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Image required",
      });
    }

    const uploaded =
      await uploadToCloudinary(
        req.file.buffer
      );

    const gallery =
      await galleryService.createGalleryItem(
        {
          title: req.body.title,
          category: req.body.category,
          image: uploaded.secure_url,
        }
      );

    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getGallery = async (req, res) => {
  try {
    const gallery =
      await galleryService.getGallery();

    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteGalleryItem = async (
  req,
  res
) => {
  try {
    await galleryService.deleteGalleryItem(
      req.params.id
    );

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createGalleryItem,
  getGallery,
  deleteGalleryItem,
};