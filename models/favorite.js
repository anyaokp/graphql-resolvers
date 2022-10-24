const { Schema, model } = require('mongoose')

const FavoriteSchema = new Schema(
  {
    customerId: { type: Schema.Types.ObjectId, required: true },
    products: [{ type: String }],
  },
  { timestamps: true, versionKey: false }
)

FavoriteSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Favorite', FavoriteSchema)
