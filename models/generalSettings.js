const { Schema, model } = require('mongoose')

const {
  SYSTEM_LANGUAGE,
  STATUS_MATRIX,
  DAYS,
  PRODUCTS_QUANTITY,
  WEIGHT_ACCURACY,
  PRINTING_FORMS,
} = require('../constants')

const GeneralSettings = new Schema(
  {
    company: { type: String, required: true },
    systemLanguage: { type: String, required: true, enum: SYSTEM_LANGUAGE },
    listAvailableCountries: [{ type: String }],
    defaultCurrency: { type: String, required: true },
    timeZone: { type: String, required: true },
    statusMatrix: { type: String, required: true, enum: STATUS_MATRIX },
    workingTime: [
      {
        daysOfWeek: [
          {
            type: String,
            enum: DAYS,
          },
        ],
        startTime: { type: String },
        endTime: { type: String },
        lunchStartTime: { type: String },
        lunchEndTime: { type: String },
      },
    ],
    noWorkingDates: [{ type: String }],
    ipRestriction: { type: String },
    twoFactorAuth: {
      type: String,
    },
    productsQuantity: {
      type: String,
      required: true,
      enum: PRODUCTS_QUANTITY,
    },
    weightAccuracy: {
      type: String,
      required: true,
      enum: WEIGHT_ACCURACY,
    },
    printingForms: {
      type: String,
      required: true,
      enum: PRINTING_FORMS,
    },
  },
  { timestamps: true, versionKey: false }
)

GeneralSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('General-Settings', GeneralSettings)
