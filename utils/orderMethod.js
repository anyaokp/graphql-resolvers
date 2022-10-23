const { OrderMethod } = require('../models')

async function createOrderMethod(data) {
  return await OrderMethod.create(data)
}

async function getOrderMethod(id) {
  return await OrderMethod.findOne({ _id: id })
}

async function listOrderMethods(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await OrderMethod.find(query).skip(skip).limit(limit)
    const totalDocs = await OrderMethod.countDocuments(query)
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

async function updateOrderMethod(data) {
  const { id } = data
  return await OrderMethod.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteOrderMethod(id) {
  return await OrderMethod.findOneAndDelete({ _id: id })
}

module.exports = {
  createOrderMethod,
  updateOrderMethod,
  deleteOrderMethod,
  getOrderMethod,
  listOrderMethods,
}
