const { Schema, model } = require('mongoose')

const { TYPE_WAREHOUSE, RESIDUE_TYPE, DAYS } = require('../constants')

const WareHouseSchema = new Schema(
  {
    name: { type: String, required: true },
    typeWarehouse: { type: String, enum: TYPE_WAREHOUSE },
    characterCode: { type: String },
    activity: { type: Boolean },
    description: { type: String },
    residueType: { type: String, enum: RESIDUE_TYPE },
    ordering: { type: Number },
    country: { type: String },
    regionId: { type: String, ref: 'Region' },
    cityId: { type: String, ref: 'City'},
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

WareHouseSchema.set('toObject', { virtuals: true })
WareHouseSchema.set('toJSON', { virtuals: true })

WareHouseSchema.virtual('city', {
  ref: 'City',
  localField: 'cityId', 
  foreignField: '_id',
  justOne : true
})

WareHouseSchema.virtual('region', {
  ref: 'Region',
  localField: 'regionId', 
  foreignField: '_id' ,
  justOne : true
})

WareHouseSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Ware-house', WareHouseSchema)
