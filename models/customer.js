const mongoose = require('mongoose');
const { CUSTOMER_STATUS, SEX } = require('../constants');

const Schema = mongoose.Schema;
	
const CustomerSchema = new Schema(
  {
    userStatus: {
      type: [
        { type: String,
          enum: CUSTOMER_STATUS
        }
      ]
    },
    lastName: { type: String },
    firstName: { type: String },
    patronymic: { type: String },
    email: { type: String },
    birthday: { type: String },
    tags: {
      type: [
        { 
          name: {type: String},
          color: { type: String}
        }
      ]
    },
    managerId: {
      type: String,
      ref: 'User',
    },
    sex: {
      type: String,
      enum: SEX
    },
    address: {
      index: { type: String, default: null },
      country: { type: String, default: null },
      region: { type: String, default: null },
      city: { type: String, default: null },
      street: { type: String, default: null },
      structure: { type: String, default: null },
      entrance: { type: String, default: null },
      flat: { type: String, default: null },
      floor: { type: Number, default: null },
      house: { type: String, default: null },
      housing: { type: String, default: null },
      metro: { type: String, default: null },
      notes: { type: String , default: null}, 
      text: { type: String, default: null },
      intercomCode: { type: String, default: null },
      isFlat: { type: Boolean, String, default: false },
      isOffice: { type: Boolean, default: false },
    },
    phone: {
      type: String,
      required: true
    },
    totalSumm: {
      type: Number,
      required: true,
      default: 0
    },
    averageSumm: {
      type: Number,
      required: true,
      default: 0
    },
    totalAmountOfOrders: {
      type: Number,
      required: true,
      default: 0
    },
    isEntity: {
      type: Boolean,
      required: true,
      default: false
    },
    entityInfo: {
      legalName: { type: String },
      fax: { type: String },
      INN: { type: String }, 
      KPP: { type: String },
      legalAddress: { type: String },
      OKPO: { type: String },
      OKONH: { type: String },
      checkingAccount: { type: String },
      corrAccount: { type: String },
      BIK: { type: String }
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

CustomerSchema.set('toObject', { virtuals: true })
CustomerSchema.set('toJSON', { virtuals: true })

CustomerSchema.virtual('id').get(function(){
  return this._id
});

module.exports = mongoose.model('Customer', CustomerSchema);