const { Contragent } = require('../models')

async function createContragent(data) {
  return await Contragent.create(data)
}

async function getContragent(id) {
  return await Contragent.findOne({ _id: id })
}

async function listContragents(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Contragent.find(query).skip(skip).limit(limit)
    const totalDocs = await Contragent.countDocuments(query)
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

async function updateContragent(data) {
  const { id } = data
  return await Contragent.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteContragent(id) {
  return await Contragent.findOneAndDelete({ _id: id })
}

module.exports = {
  createContragent,
  updateContragent,
  deleteContragent,
  getContragent,
  listContragents,
}
