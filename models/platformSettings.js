const { Schema, model } = require('mongoose')

const { Distribution } = require('../enums')

const platformSettings = new Schema(
  {
    name: { type: String, enum: Distribution },
    emailNotification: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

platformSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('platformSettings', platformSettings)
