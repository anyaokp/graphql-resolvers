const { Schema, model } = require('mongoose')

const Unit = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    sym: { type: String, required: true },
    active: { type: Boolean },
    default: { type: Boolean },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

Unit.virtual('id').get(function () {
  return this._id
})

module.exports = model('Unit', Unit)
