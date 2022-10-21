const { Schema, model } = require('mongoose')

const { TypeExpanse } = require('../constants')

const CostItem = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    ordering: { type: Number },
    group: { type: Schema.Types.ObjectId },
    type: { type: String, required: true, enum: TypeExpanse },
    appliesToOrders: { type: Boolean },
    appliesToUsers: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

CostItem.virtual('id').get(function () {
  return this._id
})

module.exports = model('CostItem', CostItem)
