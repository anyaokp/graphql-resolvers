const { CostItem } = require('../models')

async function createCostItem(data) {
  return await CostItem.create(data)
}

async function getCostItem(id) {
  return await CostItem.findOne({ _id: id })
}

async function listCostItems(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await CostItem.find(query).skip(skip).limit(limit)
    const totalDocs = await CostItem.countDocuments(query)
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

async function updateCostItem(data) {
  const { id } = data
  return await CostItem.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteCostItem(id) {
  return await CostItem.findOneAndDelete({ _id: id })
}

module.exports = {
  createCostItem,
  updateCostItem,
  deleteCostItem,
  getCostItem,
  listCostItems,
}
