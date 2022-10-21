const { TransitionStatuses, OrderType, UserGroup } = require('../models')

async function createTransitionStatuses(data) {
  let order, userGroup
  const { orderTypeId, userGroupId } = data
  if (orderTypeId) {
    order = await OrderType.findById(orderTypeId)
  }
  if (userGroupId) {
    userGroup = await UserGroup.findById(userGroupId)
  }
  return await TransitionStatuses.create({
    orderType: order._id ? order : null,
    userGroup: userGroup._id ? userGroup : null,
    ...data,
  })
}

async function getTransitionStatuses(id) {
  return await TransitionStatuses.findOne({ _id: id }).populate(
    'orderType userGroup'
  )
}

async function listTransitionStatuses(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await TransitionStatuses.find(query)
      .skip(skip)
      .limit(limit)
      .populate('orderType userGroup')
    const totalDocs = await TransitionStatuses.countDocuments(query)
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

async function updateTransitionStatuses(data) {
  const { id, orderTypeId, userGroupId } = data
  const result = await TransitionStatuses.findById(id)
  let order, userGroup
  if (orderTypeId) {
    order = await OrderType.findById(orderTypeId)
  }
  if (userGroupId) {
    userGroup = await UserGroup.findById(userGroupId)
  }
  return await TransitionStatuses.findByIdAndUpdate(
    id,
    {
      orderType: order._id ? order : result.orderTypeId,
      userGroup: userGroup._id ? userGroup : result.userGroupId,
      ...data,
    },
    {
      new: true,
      runValidators: true,
    }
  ).populate('orderType userGroup')
}

async function deleteTransitionStatuses(id) {
  return await TransitionStatuses.findOneAndDelete({ _id: id }).populate(
    'orderType userGroup'
  )
}

module.exports = {
  createTransitionStatuses,
  updateTransitionStatuses,
  deleteTransitionStatuses,
  getTransitionStatuses,
  listTransitionStatuses,
}
