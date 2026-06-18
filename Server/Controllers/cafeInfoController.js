const cafeInfoService = require(
  "../Services/cafeInfoService"
);

const createCafeInfo = async (req, res) => {
  try {
    const info =
      await cafeInfoService.createCafeInfo(
        req.body
      );

    res.status(201).json(info);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCafeInfo = async (req, res) => {
  try {
    const info =
      await cafeInfoService.getCafeInfo();

    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCafeInfo = async (req, res) => {
  try {
    const info =
      await cafeInfoService.updateCafeInfo(
        req.params.id,
        req.body
      );

    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCafeInfo,
  getCafeInfo,
  updateCafeInfo,
};