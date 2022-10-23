const { Schema, model } = require('mongoose')

const {
  SYSTEMLANGUAGE,
  STATUSMATRIX,
  DAYS,
  PRODUCTSQUANTITY,
  WEIGHTACCURACY,
  PRINTINGFORMS,
} = require('../constants')

const GeneralSettings = new Schema(
  {
    company: { type: String, required: true },
    systemLanguage: { type: String, required: true, enum: SYSTEMLANGUAGE },
    listAvailableCountries: [{ type: String }],
    defaultCurrency: { type: String, required: true },
    timeZone: { type: String, required: true },
    statusMatrix: { type: String, required: true, enum: STATUSMATRIX },
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
      enum: PRODUCTSQUANTITY,
    },
    weightAccuracy: {
      type: String,
      required: true,
      enum: WEIGHTACCURACY,
    },
    printingForms: {
      type: String,
      required: true,
      enum: PRINTINGFORMS,
    },
  },
  { timestamps: true, versionKey: false }
)

GeneralSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('GeneralSettings', GeneralSettings)
