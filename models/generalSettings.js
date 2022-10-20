const { Schema, model } = require('mongoose')

const {
  SystemLanguage,
  StatusMatrix,
  Days,
  ProductsQuantity,
  WeightAccuracy,
  PrintingForms,
} = require('../enums')

const GeneralSettings = new Schema(
  {
    company: { type: String, required: true },
    systemLanguage: { type: String, required: true, enum: SystemLanguage },
    listAvailableCountries: [{ type: String }],
    defaultCurrency: { type: String, required: true },
    timeZone: { type: String, required: true },
    statusMatrix: { type: String, required: true, enum: StatusMatrix },
    workingTime: [
      {
        daysOfWeek: [
          {
            type: String,
            enum: Days,
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
      enum: ProductsQuantity,
    },
    weightAccuracy: {
      type: String,
      required: true,
      enum: WeightAccuracy,
    },
    printingForms: {
      type: String,
      required: true,
      enum: PrintingForms,
    },
  },
  { timestamps: true, versionKey: false }
)

GeneralSettings.virtual('id').get(function () {
  return this._id
})

module.exports = model('GeneralSettings', GeneralSettings)
