const { Bucket } = require('../models')

async function createBucket(data) {
  return await Bucket.create(data)
}

async function getBucket(id) {
  return await Bucket.findOne({ _id: id })
}

async function listBuckets(filter) {
  try {
    const { page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await Bucket.find(query).skip(skip).limit(limit)
    const totalDocs = await Bucket.countDocuments(query)
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

async function updateBucket(data) {
  const { id } = data
  return await Bucket.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  })
}

async function deleteBucket(id) {
  return await Bucket.findOneAndDelete({ _id: id })
}

module.exports = {
  createBucket,
  updateBucket,
  deleteBucket,
  getBucket,
  listBuckets,
}
