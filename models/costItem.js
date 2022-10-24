const { Schema, model } = require('mongoose')

const { TYPE_EXPANSE } = require('../constants')

const CostItemSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, dafault: true  },
    ordering: { type: Number },
    group: { type: Schema.Types.ObjectId },
    type: { type: String, required: true, enum: TYPE_EXPANSE },
    appliesToOrders: { type: Boolean },
    appliesToUsers: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

CostItemSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Cost-item', CostItemSchema)
