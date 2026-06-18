const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload");

const menuController = require("../Controllers/menuController");

router.post(
  "/",
  upload.single("image"),
  menuController.createMenu
);

router.get("/", menuController.getAllMenus);

router.get(
  "/category/:category",
  menuController.getMenuByCategory
);

router.get(
  "/best",
  menuController.getBestMenus
);

router.patch(
  "/best/:id",
  menuController.updateBestStatus
);

router.get("/:id", menuController.getMenuById);

router.put(
  "/:id",
  upload.single("image"),
  menuController.updateMenu
);

router.delete("/:id", menuController.deleteMenu);

module.exports = router;

