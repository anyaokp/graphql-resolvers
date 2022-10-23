const { Customer } = require("../models")

async function createCustomer(data){
  return await Customer.create(data)
}

async function  getCustomer(id){
  return await Customer.findOne({_id: id})
}

async function  listCustomers(filter){
  try {
    const {
      page = 1,
      limit = 10
    } = filter

    const query = {}
    //lastName && (query.lastName = lastName)

    const skip = limit * (page - 1);
    const Customers =  await Customer.find(query).skip(skip).limit(limit)
    const totalDocs = await Customer.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return { 
      items: Customers,
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

async function  updateCustomer(data){
  const { id } = data
  return await Customer.findOneAndUpdate(
    {_id: id}, 
    data,
    {new: true, runValidators: true}
  )
}

async function  deleteCustomer(id){
  return await Customer.findOneAndDelete({_id: id})
}


module.exports = {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  listCustomers
}