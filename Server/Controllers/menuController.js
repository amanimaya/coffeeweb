// const menuService = require("../Services/menuService");

// const createMenu = async (req, res) => {
//   try {
//     const menu = await menuService.createMenu({
//       name: req.body.name,
//       price: req.body.price,
//       description: req.body.description,
//       best: req.body.best,
//       image: req.file
//         ? `/uploads/${req.file.filename}`
//         : "",
//     });

//     res.status(201).json(menu);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const getAllMenus = async (req, res) => {
//   try {
//     const menus = await menuService.getAllMenus();
//     res.json(menus);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const getMenuById = async (req, res) => {
//   try {
//     const menu = await menuService.getMenuById(req.params.id);

//     if (!menu) {
//       return res.status(404).json({
//         message: "Menu item not found",
//       });
//     }

//     res.json(menu);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const updateMenu = async (req, res) => {
//   try {
//     const data = {
//       name: req.body.name,
//       price: req.body.price,
//       description: req.body.description,
//       best: req.body.best,
//     };

//     if (req.file) {
//       data.image = `/uploads/${req.file.filename}`;
//     }

//     const menu = await menuService.updateMenu(
//       req.params.id,
//       data
//     );

//     res.json(menu);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// const deleteMenu = async (req, res) => {
//   try {
//     await menuService.deleteMenu(req.params.id);

//     res.json({
//       message: "Menu item deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   createMenu,
//   getAllMenus,
//   getMenuById,
//   updateMenu,
//   deleteMenu,
// };


const menuService = require("../Services/menuService");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "coffee-menu",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

const createMenu = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const uploaded = await uploadToCloudinary(
        req.file.buffer
      );

      imageUrl = uploaded.secure_url;
    }

    const menu = await menuService.createMenu({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      best: req.body.best,
      category: req.body.category,
      image: imageUrl,
    });

    res.status(201).json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllMenus = async (req, res) => {
  try {
    const menus = await menuService.getAllMenus();

    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMenuById = async (req, res) => {
  try {
    const menu = await menuService.getMenuById(
      req.params.id
    );

    if (!menu) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateMenu = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      best: req.body.best,
       category: req.body.category,
    };

    if (req.file) {
      const uploaded = await uploadToCloudinary(
        req.file.buffer
      );

      data.image = uploaded.secure_url;
    }

    const menu = await menuService.updateMenu(
      req.params.id,
      data
    );

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMenu = async (req, res) => {
  try {
    await menuService.deleteMenu(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMenuByCategory = async (req, res) => {
  try {
    const menu =
      await menuService.getMenuByCategory(
        req.params.category
      );

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBestMenus = async (req, res) => {
  try {
    const menus = await menuService.getBestMenus();

    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateBestStatus = async (req, res) => {
  try {
    const menu =
      await menuService.updateBestStatus(
        req.params.id,
        req.body.best
      );

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMenu,
  getAllMenus,
  getMenuById,
  updateMenu,
  deleteMenu,
  getMenuByCategory,
  getBestMenus,
  updateBestStatus,
};