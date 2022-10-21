const { Schema, model } = require('mongoose')

const { Type } = require('../enums')

const StatusGroup = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    ordering: { type: Number, required: true },
    color: { type: String },
    default: { type: Boolean },
    type: { type: String, enum: Type },
  },
  { timestamps: true, versionKey: false }
)

StatusGroup.virtual('id').get(function () {
  return this._id
})

module.exports = model('StatusGroup', StatusGroup)