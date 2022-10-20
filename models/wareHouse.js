const { Schema, model } = require('mongoose')

const { TypeWarehouse, ResidueType, Days } = require('../enums/index')

const WareHouse = new Schema({
  name: { type: String, required: true },
  typeWarehouse: { type: String, enum: TypeWarehouse },
  characterCode: { type: String },
  activity: { type: Boolean },
  description: { type: String },
  residueType: { type: String, enum: ResidueType },
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
    days: [{ type: String, enum: Days }],
    timeStart: { type: String },
    timeEnd: { type: String },
    value: { type: String },
    netValue: { type: String },
  },
  contact: { type: String },
  phone: { type: String },
  email: { type: String },
})
module.exports = model('WareHouse', WareHouse)
