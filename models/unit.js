const { Schema, model } = require('mongoose')

const UnitSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    sym: { type: String, required: true },
    active: { type: Boolean, dafault: true  },
    default: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

UnitSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Unit', UnitSchema)
