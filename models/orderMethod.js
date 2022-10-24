const { Schema, model } = require('mongoose')

const OrderMethodSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, default: true  },
    defaultForCRM: { type: Boolean },
    defaultForAPI: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

OrderMethodSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Order-method', OrderMethodSchema)
