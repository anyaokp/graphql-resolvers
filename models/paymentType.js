const { Schema, model } = require('mongoose')

const PaymentTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, dafault: true  },
    defaultForCRM: { type: Boolean },
    defaultForApi: { type: Boolean },
    description: { type: String },
    paymentStatuses: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

PaymentTypeSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Payment-type', PaymentTypeSchema)
