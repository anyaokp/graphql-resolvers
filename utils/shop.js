const { Shop } = require('../models')

async function createShop(data) {
  return await Shop.create(data)
}

async function getShop(id) {
  return await Shop.findOne({ _id: id })
}

async function listShops(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Shop.find(query).skip(skip).limit(limit)
    const totalDocs = await Shop.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return {
      items: result,
      pagination: {
        page,
        limit,
        totalDocs,
        totalPages,
      },
    }
  } catch (err) {
    throw err
  }
}

async function updateShop(data) {
  const { id } = data
  return await Shop.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteShop(id) {
  return await Shop.findOneAndDelete({ _id: id })
}

module.exports = {
  createShop,
  updateShop,
  deleteShop,
  listShops,
  getShop,
}
