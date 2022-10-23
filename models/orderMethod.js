const { Schema, model } = require('mongoose')

const OrderMethod = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    defaultForCRM: { type: Boolean },
    defaultForAPI: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

OrderMethod.virtual('id').get(function () {
  return this._id
})

module.exports = model('OrderMethod', OrderMethod)
