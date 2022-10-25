const { Status, StatusGroup } = require('../models')

async function createStatus(data) {
  return await Status.create(data)
}

async function getStatus(id) {
  return await Status.findOne({ _id: id }).populate('groupInfo')
}

async function listStatuses(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Status.find(query)
      .skip(skip)
      .limit(limit)
      .populate('group')
    const totalDocs = await Status.countDocuments(query)
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

async function updateStatus(data) {
  const { id } = data
  return await Status.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  }).populate('group')
}

async function deleteStatus(id) {
  return await Status.findOneAndDelete({ _id: id }).populate('group')
}

module.exports = {
  createStatus,
  updateStatus,
  deleteStatus,
  getStatus,
  listStatuses,
}
