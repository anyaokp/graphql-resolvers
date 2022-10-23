const { Schema, model } = require('mongoose')

const { BASE_PRICE } = require('../constants')

const PriceType = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    isPromotionalPrice: { type: Boolean },
    basePrice: {
      type: String,
      enum: BASE_PRICE,
    },
    ordering: { type: Number },
    description: { type: String },
    groups: [{ type: String }],
    filterExpression: { type: String },
    geo: {
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
    },
  },

  { timestamps: true, versionKey: false }
)

PriceType.virtual('id').get(function () {
  return this._id
})

module.exports = model('Price-Type', PriceType)
