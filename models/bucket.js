const { Schema, model } = require('mongoose')

const Bucket = new Schema(
  {
    customerId: { type: Schema.Types.ObjectId, required: true },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, required: true },
        configurationId: { type: String },
        weight: { type: String },
        promotionId: { type: Schema.Types.ObjectId },
        quantity: { type: Number },
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

Bucket.virtual('id').get(function () {
  return this._id
})

module.exports = model('Bucket', Bucket)
