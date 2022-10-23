const { PlatformSettings } = require('../models')

async function createPlatformSettings(data) {
  return await PlatformSettings.create(data)
}

async function getPlatformSettings(id) {
  return await PlatformSettings.findOne({ _id: id })
}

async function listPlatformSettings(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await PlatformSettings.find(query).skip(skip).limit(limit)
    const totalDocs = await PlatformSettings.countDocuments(query)
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

async function updatePlatformSettings(data) {
  const { id } = data
  return await PlatformSettings.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deletePlatformSettings(id) {
  return await PlatformSettings.findOneAndDelete({ _id: id })
}

module.exports = {
  createPlatformSettings,
  updatePlatformSettings,
  deletePlatformSettings,
  getPlatformSettings,
  listPlatformSettings,
}
