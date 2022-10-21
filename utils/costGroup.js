const { CostGroup } = require('../models')

async function createCostGroup(data) {
  return await CostGroup.create(data)
}

async function getCostGroup(id) {
  return await CostGroup.findOne({ _id: id })
}

async function listCostGroups(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await CostGroup.find(query).skip(skip).limit(limit)
    const totalDocs = await CostGroup.countDocuments(query)
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

async function updateCostGroup(data) {
  const { id } = data
  return await CostGroup.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteCostGroup(id) {
  return await CostGroup.findOneAndDelete({ _id: id })
}

module.exports = {
  createCostGroup,
  updateCostGroup,
  deleteCostGroup,
  getCostGroup,
  listCostGroups,
}
