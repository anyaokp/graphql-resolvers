const { PriceType } = require('../models')

async function createPriceType(data) {
  return await PriceType.create(data)
}

async function getPriceType(id) {
  return await PriceType.findOne({ _id: id })
}

async function listPriceTypes(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await PriceType.find(query).skip(skip).limit(limit)
    const totalDocs = await PriceType.countDocuments(query)
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

async function updatePriceType(data) {
  const { id } = data
  return await PriceType.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deletePriceType(id) {
  return await PriceType.findOneAndDelete({ _id: id })
}

module.exports = {
  createPriceType,
  updatePriceType,
  deletePriceType,
  getPriceType,
  listPriceTypes,
}
