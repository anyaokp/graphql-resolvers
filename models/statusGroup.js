const { Schema, model } = require('mongoose')

const { TYPE } = require('../constants')

const StatusGroupSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, dafault: true  },
    ordering: { type: Number, required: true },
    color: { type: String },
    default: { type: Boolean },
    type: { type: String, enum: TYPE },
  },
  { timestamps: true, versionKey: false }
)

StatusGroupSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Status-group', StatusGroupSchema)
