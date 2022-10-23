const { Schema, model } = require('mongoose')

const Courier = new Schema(
  {
    lastName: { type: String },
    firstName: { type: String, required: true },
    patronymic: { type: String },
    email: { type: String },
    phone: { type: String },
    active: { type: Boolean },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
)

Courier.virtual('id').get(function () {
  return this._id
})

module.exports = model('Courier', Courier)
