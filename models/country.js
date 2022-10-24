const { Schema, model } = require('mongoose')

const CountrySchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true, versionKey: false }
)

CountrySchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Country', CountrySchema)
