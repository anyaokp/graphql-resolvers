const { Schema, model } = require('mongoose')

const {
  IntegrationCode,
  CountryCode,
  VatRate,
  NetValueType,
  Days,
  CalculationType,
} = require('../enums/index')

const DeliveryType = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    integrationCode: { type: String, enum: IntegrationCode },
    active: { type: Boolean },
    defaultForCrm: { type: Boolean },
    description: { type: String },
    availableCountries: [
      {
        type: String,
        enum: CountryCode,
      },
    ],
    services: [
      {
        name: { type: String, required: true },
        characterCode: { type: String, required: true },
        activity: { type: Boolean },
      },
    ],
    vatRate: { type: String, enum: VatRate },
    defaultCost: { type: String, required: true },
    defaultNetCost: { type: String, required: true },
    calculationType: { type: String, required: true, enum: CalculationType },
    costDependsOnRegionWeight: { type: Boolean },
    costDependsOnDateTime: { type: Boolean },
    codMarkup: { type: String },
    limitByRegions: { type: Boolean },
    regionWeightCostConditions: [
      {
        location: [
          {
            countryId: { type: Schema.Types.ObjectId },
            region: [
              {
                regionId: { type: Schema.Types.ObjectId },
                regionName: { type: String },
                locality: [
                  {
                    localityId: { type: Schema.Types.ObjectId },
                    localityName: { type: String },
                  },
                ],
              },
            ],
          },
        ],
        weightFrom: { type: String },
        weightTo: { type: String },
        orderPriceFrom: { type: String },
        orderPriceTo: { type: String },
        netValueType: { type: String, enum: NetValueType },
        netValue: { type: String },
        value: { type: String },
      },
    ],
    dateTimeCostConditions: [
      {
        days: [{ type: String, enum: Days }],
        timeStart: { type: String },
        timeEnd: { type: String },
        value: { type: String },
        netValue: { type: String },
      },
    ],
    paymentTypes: [
      {
        paymentTypeCode: { type: String },
        paymentTypeName: { type: String },
        allowToUse: { type: Boolean },
        cashOnDelivery: { type: Boolean },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

DeliveryType.virtual('id').get(function () {
  return this._id
})

module.exports = model('DeliveryType', DeliveryType)
