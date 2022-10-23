const { Region } = require('../models')

async function createRegion(data) {
  return await Region.create(data)
}

async function getRegion(id) {
  return await Region.findOne({ _id: id })
}

async function listRegions(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Region.find(query).skip(skip).limit(limit)
    const totalDocs = await Region.countDocuments(query)
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

async function updateRegion(data) {
  const { id } = data
  return await Region.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteRegion(id) {
  return await Region.findOneAndDelete({ _id: id })
}

module.exports = {
  createRegion,
  updateRegion,
  getRegion,
  listRegions,
  deleteRegion,
}
