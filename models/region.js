const { Schema, model } = require('mongoose')

const Region = new Schema(
  {
    name: { type: String },
    countryId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
)

module.exports = model('Region', Region)
