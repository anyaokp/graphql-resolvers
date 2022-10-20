const { Schema, model } = require('mongoose')

const { Rights, OrderAccess } = require('../enums/index')

const UserGroup = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  rights: [
    {
      type: String,
      enum: Rights,
    },
  ],
  isManager: { type: Boolean },
  beakdownOrderTypes: [{ type: String }],
  breakdownSites: [{ type: String }],
  makeBreakdownByOrderMethods: { type: Boolean },
  breakdownOrderMethods: [{ type: String }],
  isDeliveryMen: { type: Boolean }, // ответственный за доставку
  deliveryTypes: [{ type: String }],
  restrictByDeliveryTypes: { type: Boolean }, // предоставлять доступ...
  orderAccess: {
    type: String,
    required: true,
    enum: OrderAccess,
  },
})

module.exports = model('UserGroup', UserGroup)
