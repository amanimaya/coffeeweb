// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     const uniqueName =
//       Date.now() + path.extname(file.originalname);

//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpg|jpeg|png|webp/;

//   const isValid =
//     allowedTypes.test(
//       path.extname(file.originalname).toLowerCase()
//     ) &&
//     allowedTypes.test(file.mimetype.split("/")[1]);

//   if (isValid) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed."));
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
// });

// module.exports = upload;

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;