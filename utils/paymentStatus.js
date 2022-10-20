const { PaymentStatus } = require('../models')

async function createPaymentStatus(data) {
  return await PaymentStatus.create(data)
}

async function getPaymentStatus(id) {
  return await PaymentStatus.findOne({ _id: id })
}

async function listPaymentStatuses(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await PaymentStatus.find(query).skip(skip).limit(limit)
    const totalDocs = await PaymentStatus.countDocuments(query)
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

async function updatePaymentStatus(data) {
  const { id } = data
  return await PaymentStatus.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deletePaymentStatus(id) {
  return await PaymentStatus.findOneAndDelete({ _id: id })
}

module.exports = {
  createPaymentStatus,
  updatePaymentStatus,
  deletePaymentStatus,
  listPaymentStatuses,
  getPaymentStatus,
}
