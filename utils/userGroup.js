const { UserGroup } = require('../models')

async function createUserGroup(data) {
  return await UserGroup.create(data)
}

async function getUserGroup(id) {
  return await UserGroup.findOne({ _id: id })
}

async function listUserGroups(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await UserGroup.find(query).skip(skip).limit(limit)
    const totalDocs = await UserGroup.countDocuments(query)
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

async function updateUserGroup(data) {
  const { id } = data
  return await UserGroup.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteUserGroup(id) {
  return await UserGroup.findOneAndDelete({ _id: id })
}

module.exports = {
  createUserGroup,
  updateUserGroup,
  deleteUserGroup,
  getUserGroup,
  listUserGroups,
}
