const { Schema, model } = require('mongoose')

const PaymentType = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    defaultForCRM: { type: Boolean },
    defaultForApi: { type: Boolean },
    description: { type: String },
    paymentStatuses: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

PaymentType.virtual('id').get(function () {
  return this._id
})

module.exports = model('Payment-Type', PaymentType)
