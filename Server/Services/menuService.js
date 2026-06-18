const Menu = require("../Models/menuModel");

const createMenu = async (data) => {
  return await Menu.create(data);
};

const getAllMenus = async () => {
  return await Menu.find();
};

const getMenuById = async (id) => {
  return await Menu.findById(id);
};

const updateMenu = async (id, data) => {
  return await Menu.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const deleteMenu = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

const getMenuByCategory = async (category) => {
  return await Menu.find({ category });
};

const getBestMenus = async () => {
  return await Menu.find({ best: true });
};

const updateBestStatus = async (id, best) => {
  return await Menu.findByIdAndUpdate(
    id,
    { best },
    { new: true }
  );
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