const { City } = require('../models')

async function createCity(data) {
  return await City.create(data)
}

async function getCity(id) {
  return await City.findOne({ _id: id })
}

async function listCities(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await City.find(query).skip(skip).limit(limit)
    const totalDocs = await City.countDocuments(query)
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

async function updateCity(data) {
  const { id } = data
  return await City.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteCity(id) {
  return await City.findOneAndDelete({ _id: id })
}

module.exports = {
  createCity,
  updateCity,
  deleteCity,
  getCity,
  listCities,
}
