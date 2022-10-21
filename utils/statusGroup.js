const { StatusGroup } = require('../models')

async function createStatusGroup(data) {
  return await StatusGroup.create(data)
}

async function getStatusGroup(id) {
  return await StatusGroup.findOne({ _id: id })
}

async function listStatusGroups(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await StatusGroup.find(query).skip(skip).limit(limit)
    const totalDocs = await StatusGroup.countDocuments(query)
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

async function updateStatusGroup(data) {
  const { id } = data
  return await StatusGroup.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteStatusGroup(id) {
  return await StatusGroup.findOneAndDelete({ _id: id })
}

module.exports = {
  createStatusGroup,
  updateStatusGroup,
  deleteStatusGroup,
  getStatusGroup,
  listStatusGroups,
}
