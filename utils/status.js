const { Status, StatusGroup } = require('../models')

const ObjectId = require('mongoose').Types.ObjectId

async function createStatus(data) {
  const { group } = data
  const groupInfo = await StatusGroup.findById(group)
  return await Status.create({
    groupInfo: groupInfo._id ? groupInfo : null,
    ...data,
  })
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
      .populate('groupInfo')
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
  const { id, group } = data
  const result = await Status.findById(id)
  const info = result._id ? result.group : null
  const groupInfo = await StatusGroup.findById(group)
  return await Status.findByIdAndUpdate(
    id,
    {
      groupInfo: groupInfo._id ? groupInfo : info,
      ...data,
    },
    {
      new: true,
      runValidators: true,
    }
  ).populate('groupInfo')
}

async function deleteStatus(id) {
  return await Status.findOneAndDelete({ _id: id }).populate('groupInfo')
}

module.exports = {
  createStatus,
  updateStatus,
  deleteStatus,
  getStatus,
  listStatuses,
}
