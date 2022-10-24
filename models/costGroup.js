const { Schema, model } = require('mongoose')

const CostGroup = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    ordering: { type: Number },
    color: { type: String },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

CostGroup.virtual('id').get(function () {
  return this._id
})

module.exports = model('Cost-Group', CostGroup)
