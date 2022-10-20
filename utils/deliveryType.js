const { DeliveryType } = require('../models')

async function createDeliveryType(data) {
  return await DeliveryType.create(data)
}

async function getDeliveryType(id) {
  return await DeliveryType.findOne({ _id: id })
}

async function listDeliveryTypes(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await DeliveryType.find(query).skip(skip).limit(limit)
    const totalDocs = await DeliveryType.countDocuments(query)
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

async function updateDeliveryType(data) {
  const { id } = data
  return await DeliveryType.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteDeliveryType(id) {
  return await DeliveryType.findOneAndDelete({ _id: id })
}

module.exports = {
  createDeliveryType,
  updateDeliveryType,
  deleteDeliveryType,
  getDeliveryType,
  listDeliveryTypes,
}
