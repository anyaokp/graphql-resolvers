const { Schema, model } = require('mongoose')

const Region = new Schema(
  {
    name: { type: String },
    countryId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
)

Region.virtual('id').get(function () {
  return this._id
})

module.exports = model('Region', Region)
