const { Schema, model } = require('mongoose')

const { DISTRIBUTION } = require('../constants')

const PlatformSettings = new Schema(
  {
    distribution: { type: String, enum: DISTRIBUTION },
    emailNotification: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

PlatformSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('PlatformSettings', PlatformSettings)
