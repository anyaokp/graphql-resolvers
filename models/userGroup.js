const { Schema, model } = require('mongoose')

const { RIGHTS, ORDERACCESS } = require('../constants/index')

const UserGroup = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    rights: [
      {
        type: String,
        enum: RIGHTS,
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
      enum: ORDERACCESS,
    },
  },
  { timestamps: true, versionKey: false }
)

UserGroup.virtual('id').get(function () {
  return this._id
})

module.exports = model('UserGroup', UserGroup)