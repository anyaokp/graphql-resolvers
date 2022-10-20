const mongoose = require('mongoose')

const { UserStatus } = require('../enums/index')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    lastOrderDate: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    patronymic: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    groups: {
      type: [{ type: String }],
    },
    emailAlert: {
      type: Boolean,
      default: false,
      required: true,
    },
    alertsWithSound: {
      type: Boolean,
      default: false,
      required: true,
    },
    online: {
      type: Boolean,
      default: false,
      required: true,
    },
    status: {
      type: String,
      enum: UserStatus,
      require: true,
    },
    averagCheck: {
      type: Number,
      default: 0,
      required: true,
    },
    salesAmount: {
      type: Number,
      default: 0,
      required: true,
    },
    totalAmountOfOrders: {
      type: Number,
      default: 0,
      required: true,
    },
    orderNumbers: [
      {
        type: String,
      },
    ],
    // createdAt.virtual
    // createdAt: String!
    // updatedAt: String!
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
