const { Country } = require('../models')

async function createCountry(data) {
  return await Country.create(data)
}

async function getCountry(id) {
  return await Country.findOne({ _id: id })
}

async function listCountries(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const countries = await Country.find(query).skip(skip).limit(limit)
    const totalDocs = await Country.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return {
      items: countries,
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

async function updateCountry(data) {
  const { id } = data
  return await Country.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteCountry(id) {
  return await Country.findOneAndDelete({ _id: id })
}

module.exports = {
  createCountry,
  updateCountry,
  getCountry,
  listCountries,
  deleteCountry,
}
