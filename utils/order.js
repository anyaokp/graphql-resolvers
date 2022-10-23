const { Order } = require("../models")

async function createOrder(data){
  return await Order.create(data)
}

async function  getOrder(id){
  return await Order.findOne({_id: id})
}

async function  listOrders(filter){
  try {
    const {
      page = 1,
      limit = 10
    } = filter

    const query = {}
    //lastName && (query.lastName = lastName)

    const skip = limit * (page - 1);
    const orders =  await Order.find(query).populate('status manager orderType customer deliveryType paymentType').skip(skip).limit(limit)
    const totalDocs = await Order.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return { 
      items: orders,
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

async function  updateOrder(data){
  const { id } = data
  return await Order.findOneAndUpdate(
    {_id: id}, 
    data,
    {new: true, runValidators: true}
  )
}

async function  deleteOrder(id){
  return await Order.findOneAndDelete({_id: id})
}


module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  listOrders
}