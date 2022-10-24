const { Schema, model } = require('mongoose')

const CourierSchema = new Schema(
  {
    lastName: { type: String },
    firstName: { type: String, required: true },
    patronymic: { type: String },
    email: { type: String },
    phone: { type: String },
    active: { type: Boolean, dafault: true  },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
)

CourierSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Courier', CourierSchema)
