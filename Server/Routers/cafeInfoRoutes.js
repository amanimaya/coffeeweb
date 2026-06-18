const express = require("express");

const router = express.Router();

const cafeInfoController = require(
  "../Controllers/cafeInfoController"
);

router.post(
  "/",
  cafeInfoController.createCafeInfo
);

router.get(
  "/",
  cafeInfoController.getCafeInfo
);

router.put(
  "/:id",
  cafeInfoController.updateCafeInfo
);

module.exports = router;