const { User } = require("../models")

async function createUser(data){
  return await User.create(data)
}

async function  getUser(id){
  return await User.findOne({_id: id})
}

async function  listUsers(filter){
  try {
    const {
      lastName,
      page = 1,
      limit = 10
    } = filter

    const query = {}
    lastName && (query.lastName = lastName)

    const skip = limit * (page - 1);
    const users =  await User.find(query).skip(skip).limit(limit)
    const totalDocs = await User.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return { 
      items: users,
      pagination: {
        page,
        limit,
        totalDocs,
        totalPages
      }
    }
  } catch (err) {
    throw err
  }
}

async function  updateUser(data){
  const { id } = data
  return await User.findOneAndUpdate(
    {_id: id}, 
    data,
    {new: true, runValidators: true}
  )
}

async function  deleteUser(id){
  return await User.findOneAndDelete({_id: id})
}


module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  listUsers
}