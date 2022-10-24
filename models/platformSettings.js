const { Schema, model } = require('mongoose')

const { DISTRIBUTION } = require('../constants')

const PlatformSettingsSchema = new Schema(
  {
    distribution: { type: String, enum: DISTRIBUTION },
    emailNotification: { type: Boolean },
  },
  { timestamps: true, versionKey: false }
)

PlatformSettingsSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Platform-settings', PlatformSettingsSchema)
