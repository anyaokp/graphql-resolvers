const { Favorite } = require('../models')

async function createFavorites(data) {
  return await Favorite.create(data)
}

async function getFavorites(id) {
  return await Favorite.findOne({ _id: id })
}

async function listFavorites(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Favorite.find(query).skip(skip).limit(limit)
    const totalDocs = await Favorite.countDocuments(query)
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

async function updateFavorites(data) {
  const { id } = data
  return await Favorite.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteFavorites(id) {
  return await Favorite.findOneAndDelete({ _id: id })
}

module.exports = {
  createFavorites,
  updateFavorites,
  deleteFavorites,
  getFavorites,
  listFavorites,
}
