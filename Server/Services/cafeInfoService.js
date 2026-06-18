const CafeInfo = require("../Models/cafeInfoModel");

const createCafeInfo = async (data) => {
  return await CafeInfo.create(data);
};

const getCafeInfo = async () => {
  return await CafeInfo.findOne();
};

const updateCafeInfo = async (id, data) => {
  return await CafeInfo.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );
};

module.exports = {
  createCafeInfo,
  getCafeInfo,
  updateCafeInfo,
};