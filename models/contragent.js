const { Schema, model } = require('mongoose')

const { VATRATE, CONTRAGENTTYPE } = require('../constants/index')

const Contragent = new Schema(
  {
    code: { type: String, required: true },
    countryId: { type: Schema.Types.ObjectId, required: true },
    vatRate: { type: String, enum: VATRATE },
    contragentType: { type: String, required: true, enum: CONTRAGENTTYPE },
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
  { timestamps: true, versionKey: false }
)

Contragent.virtual('id').get(function () {
  return this._id
})

module.exports = model('Contragent', Contragent)
