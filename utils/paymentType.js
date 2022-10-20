const { PaymentType } = require('../models')

async function createPaymentType(data) {
  return await PaymentType.create(data)
}

async function getPaymentType(id) {
  return await PaymentType.findOne({ _id: id })
}

async function listPaymentTypes(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await PaymentType.find(query).skip(skip).limit(limit)
    const totalDocs = await PaymentType.countDocuments(query)
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

async function updatePaymentType(data) {
  const { id } = data
  return await PaymentType.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deletePaymentType(id) {
  return await PaymentType.findOneAndDelete({ _id: id })
}

module.exports = {
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
  listPaymentTypes,
  getPaymentType,
}
