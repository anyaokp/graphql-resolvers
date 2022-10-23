const { Schema, model } = require('mongoose')

const Country = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true, versionKey: false }
)

Country.virtual('id').get(function () {
  return this._id
})

module.exports = model('Country', Country)
