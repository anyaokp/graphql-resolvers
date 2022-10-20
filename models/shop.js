const { Schema, model } = require('mongoose')

const { WarehousesAvailable } = require('../enums/index')

const Shop = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    code: { type: String, required: true },
    country: { type: Schema.Types.ObjectId },
    description: { type: String },
    active: { type: Boolean },
    ordering: { type: Number },
    phone: { type: String },
    address: { type: String },
    postCode: { type: String },
    warehousesAvailable: {
      type: String,
      enum: WarehousesAvailable,
    },
    excludedStores: [
      {
        wareHouseId: { type: Schema.Types.ObjectId },
        wareHouseName: { type: String },
      },
    ],
  },
  { timestamps: true }
)
module.exports = model('Shop', Shop)
