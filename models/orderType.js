const { Schema, model } = require('mongoose')

const OrderType = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  active: { type: Boolean },
  defaultForCRM: { type: Boolean },
  defaultForAPI: { type: Boolean },
  ordering: { type: Number, required: true },
})

module.exports = model('OrderType', OrderType)
