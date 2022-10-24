const { Schema, model } = require('mongoose')

const OrderType = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    defaultForCRM: { type: Boolean },
    defaultForAPI: { type: Boolean },
    ordering: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

OrderType.virtual('id').get(function () {
  return this._id
})

module.exports = model('Order-Type', OrderType)
