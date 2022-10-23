const { GeneralSettings } = require('../models')

async function createGeneralSettings(data) {
  return await GeneralSettings.create(data)
}

async function getGeneralSettings(id) {
  return await GeneralSettings.findOne({ _id: id })
}

async function listGeneralSettings(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await GeneralSettings.find(query).skip(skip).limit(limit)
    const totalDocs = await GeneralSettings.countDocuments(query)
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

async function updateGeneralSettings(data) {
  const { id } = data
  return await GeneralSettings.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteGeneralSettings(id) {
  return await GeneralSettings.findOneAndDelete({ _id: id })
}

module.exports = {
  createGeneralSettings,
  updateGeneralSettings,
  deleteGeneralSettings,
  getGeneralSettings,
  listGeneralSettings,
}
