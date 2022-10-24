const { Schema, model } = require('mongoose')

const { VAT_RATE, CONTRAGENT_TYPE } = require('../constants/index')

const Contragent = new Schema(
  {
    code: { type: String, required: true },
    countryId: { type: Schema.Types.ObjectId, required: true },
    vatRate: { type: String, enum: VAT_RATE },
    contragentType: { type: String, required: true, enum: CONTRAGENT_TYPE },
    INN: { type: String },
    legalName: { type: String },
    OKPO: { type: String },
    KPP: { type: String },
    OGRNIP: { type: String },
    legalAddress: { type: String },
    OGRN: { type: String },
    certificateNumber: { type: String },
    certificateDate: { type: String },
    BIK: { type: String },
    corrAccount: { type: String },
    bank: { type: String },
    bankAccount: { type: String },
    bankAddress: { type: String },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

Contragent.virtual('id').get(function () {
  return this._id
})

module.exports = model('Contragent', Contragent)
