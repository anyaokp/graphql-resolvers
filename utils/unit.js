const { Unit } = require('../models')

async function createUnit(data) {
  return await Unit.create(data)
}

async function getUnit(id) {
  return await Unit.findOne({ _id: id })
}

async function listUnits(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Unit.find(query).skip(skip).limit(limit)
    const totalDocs = await Unit.countDocuments(query)
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

async function updateUnit(data) {
  const { id } = data
  return await Unit.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteUnit(id) {
  return await Unit.findOneAndDelete({ _id: id })
}

module.exports = {
  createUnit,
  updateUnit,
  deleteUnit,
  getUnit,
  listUnits,
}
