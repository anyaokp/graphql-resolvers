const { Schema, model } = require('mongoose')

const CitySchema = new Schema(
  {
    name: { type: String },
    countryId: { type: Schema.Types.ObjectId, required: true },
    regionId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
)

CitySchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('City', CitySchema)
