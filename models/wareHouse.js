const { Schema, model } = require('mongoose')

const { TYPEWAREHOUSE, RESIDUETYPE, DAYS } = require('../constants/index')

const WareHouse = new Schema(
  {
    name: { type: String, required: true },
    typeWarehouse: { type: String, enum: TYPEWAREHOUSE },
    characterCode: { type: String },
    activity: { type: Boolean },
    description: { type: String },
    residueType: { type: String, enum: RESIDUETYPE },
    ordering: { type: Number },
    country: { type: Schema.Types.ObjectId },
    regionId: { type: Schema.Types.ObjectId },
    cityId: { type: Schema.Types.ObjectId },
    region: { type: Schema.Types.ObjectId, ref: 'Region' },
    city: { type: Schema.Types.ObjectId, ref: 'City' },
    street: { type: String },
    house: { type: String },
    structure: { type: String },
    frame: { type: String },
    office: { type: String },
    address: { type: String },
    postcode: { type: String },
    underground: { type: String },
    coordinates: { type: String },
    weekOpeningHours: {
      days: [{ type: String, enum: DAYS }],
      timeStart: { type: String },
      timeEnd: { type: String },
      value: { type: String },
      netValue: { type: String },
    },
    contact: { type: String },
    phone: { type: String },
    email: { type: String },
  },
  { timestamps: true, versionKey: false }
)

WareHouse.virtual('id').get(function () {
  return this._id
})

module.exports = model('WareHouse', WareHouse)
