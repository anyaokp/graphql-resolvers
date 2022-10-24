const { Schema, model } = require('mongoose')

const RegionSchema = new Schema(
  {
    name: { type: String },
    countryId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
)

RegionSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Region', RegionSchema)
