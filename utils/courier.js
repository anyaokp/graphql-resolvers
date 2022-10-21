const { Courier } = require('../models')

async function createCourier(data) {
  return await Courier.create(data)
}

async function getCourier(id) {
  return await Courier.findOne({ _id: id })
}

async function listCouriers(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Courier.find(query).skip(skip).limit(limit)
    const totalDocs = await Courier.countDocuments(query)
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

async function updateCourier(data) {
  const { id } = data
  return await Courier.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteCourier(id) {
  return await Courier.findOneAndDelete({ _id: id })
}

module.exports = {
  createCourier,
  updateCourier,
  deleteCourier,
  getCourier,
  listCouriers,
}
