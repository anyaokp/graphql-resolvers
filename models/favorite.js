const { Schema, model } = require('mongoose')

const Favorite = new Schema(
  {
    customerId: { type: Schema.Types.ObjectId, required: true },
    products: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
)

Favorite.virtual('id').get(function () {
  return this._id
})

module.exports = model('Favorite', Favorite)
