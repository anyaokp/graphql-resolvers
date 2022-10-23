const { Schema, model } = require('mongoose')

const Filter = new Schema(
  {
    name: { type: String, required: true },
    filter: {
      manager: { type: String },
      country: { type: String },
      email: { type: String },
      number: { type: String },
      fio: { type: String },
      statuses: [{ type: String }],
    },
  },
  { timestamps: true, versionKey: false }
)

Filter.virtual('id').get(function () {
  return this._id
})

module.exports = model('Filter', Filter)
