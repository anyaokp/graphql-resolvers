const { Schema, model } = require('mongoose')

const PaymentStatus = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  active: { type: Boolean },
  defaultForCRM: { type: Boolean },
  defaultForApi: { type: Boolean },
  paymentComplete: { type: Boolean },
  ordering: { type: Number },
  description: { type: String },
  paymentTypes: [
    {
      type: String,
    },
  ],
})

module.exports = model('PaymentStatus', PaymentStatus)
