const { User } = require("../models")
const mongoose = require("mongoose")

async function createUser(data){
  try {
    let user = await User.findOneAndUpdate({_id: mongoose.Types.ObjectId()}, data, {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }).populate('groups.group').lean()
    console.log(user)
    user.groups = user.groups.map(group => { 
      return { group: { ...group.group, id : group.group._id }} 
    })
    user.id = user._id
    return user
  } catch (err) {
    console.log("ERROR UTIL CREATE USER - ", err)
  }
}

async function  getUser(id){
  try {
    let user = await User.findOne({_id: id}).populate('groups.group').lean()
    console.log(user)
    user.groups = user.groups.map(group => { 
      return { group: { ...group.group, id : group.group._id }} 
    })
    user.id = user._id
    return user
  } catch (err) {
    console.log("ERROR UTIL GET USER - ", err)
  }
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
    let users =  await User.find(query).populate('groups.group').skip(skip).limit(limit).lean()
    users = users.map(user => {
      user.groups = user.groups.map(group => { 
        return  { group: { ...group.group, id : group.group._id }} 
      })
      return { ...user, id: user._id }
    })
    
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
  try {
    const { id } = data
    let user = await User.findOneAndUpdate(
      {_id: id}, 
      data,
      {new: true, runValidators: true}
    ).populate('groups.group').lean()
    console.log(user)
    user.groups = user.groups.map(group => { 
      return { group: { ...group.group, id : group.group._id }} 
    })
    user.id = user._id
    return user
  } catch (err) {
    console.log("ERROR UTIL UPDATE USER - ", err)
  }
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