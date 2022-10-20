const { Schema, model } = require('mongoose')

const Country = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
)

module.exports = model('Country', Country)
