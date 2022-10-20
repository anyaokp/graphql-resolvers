const { OrderType } = require('../models')

async function createOrderType(data) {
  return await OrderType.create(data)
}

async function getOrderType(id) {
  return await OrderType.findOne({ _id: id })
}

async function listOrderTypes(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await OrderType.find(query).skip(skip).limit(limit)
    const totalDocs = await OrderType.countDocuments(query)
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

async function updateOrderType(data) {
  const { id } = data
  return await OrderType.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteOrderType(id) {
  return await OrderType.findOneAndDelete({ _id: id })
}

module.exports = {
  createOrderType,
  updateOrderType,
  deleteOrderType,
  getOrderType,
  listOrderTypes,
}
