const { Schema, model } = require('mongoose')

const { Distribution } = require('../constants')

const PlatformSettings = new Schema(
  {
    distribution: { type: String, enum: Distribution },
    emailNotification: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

PlatformSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('PlatformSettings', PlatformSettings)
