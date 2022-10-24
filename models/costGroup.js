const { Schema, model } = require('mongoose')

const CostGroupSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, dafault: true },
    ordering: { type: Number },
    color: { type: String },
  },
  { timestamps: true, versionKey: false }
)

CostGroupSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Cost-group', CostGroupSchema)
