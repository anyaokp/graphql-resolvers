const { Filter } = require('../models')

async function createFilter(data) {
  return await Filter.create(data)
}

async function getFilter(id) {
  return await Filter.findOne({ _id: id })
}

async function listFilters(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Filter.find(query).skip(skip).limit(limit)
    const totalDocs = await Filter.countDocuments(query)
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

async function updateFilter(data) {
  const { id } = data
  return await Filter.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteFilter(id) {
  return await Filter.findOneAndDelete({ _id: id })
}

module.exports = {
  createFilter,
  updateFilter,
  deleteFilter,
  getFilter,
  listFilters,
}
