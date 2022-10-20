const { Schema, model } = require('mongoose')

const City = new Schema({
  name: { type: String },
  countryId: { type: Schema.Types.ObjectId, required: true },
  regionId: { type: Schema.Types.ObjectId, required: true },
})

module.exports = model('City', City)
