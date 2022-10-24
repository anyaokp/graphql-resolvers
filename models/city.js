const { Schema, model } = require('mongoose')

const City = new Schema(
  {
    name: { type: String },
    countryId: { type: Schema.Types.ObjectId, required: true },
    regionId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

City.virtual('id').get(function () {
  return this._id
})

module.exports = model('City', City)
