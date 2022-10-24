const { Schema, model } = require('mongoose')

const OrderTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, default: true  },
    defaultForCRM: { type: Boolean },
    defaultForAPI: { type: Boolean },
    ordering: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
)

OrderTypeSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Order-type', OrderTypeSchema)
