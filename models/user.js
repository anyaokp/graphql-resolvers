const mongoose = require('mongoose');
const { USER_STATUSES } = require('../..');

const Schema = mongoose.Schema;
	
const UserSchema = new Schema(
  {
    lastOrderDate: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    patronymic: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    position:  {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    active:  {
      type: Boolean,
      default: false,
      required: true
    },
    isAdmin:  {
      type: Boolean,
      default: false,
      required: true
    },
    groups: [
      {group: { type : String, ref: 'User-group' }},
    ],
    emailAlert:  {
      type: Boolean,
      default: false,
      required: true
    },
    alertsWithSound:  {
      type: Boolean,
      default: false,
      required: true
    },
    online:  {
      type: Boolean,
      default: false,
      required: true
    },
    status: {
      type: String,
      enum: USER_STATUSES,
      require: true
    },
    averagCheck:  {
      type: Number,
      default: 0,
      required: true
    },
    salesAmount: {
      type: Number,
      default: 0,
      required: true
    },
    totalAmountOfOrders: {
      type: Number,
      default: 0,
      required: true
    },
  }, {
    versionKey: false,
    timestamps: true,
  }
);


UserSchema.set('toObject', { virtuals: true })
UserSchema.set('toJSON', { virtuals: true })

UserSchema.virtual('id').get(function(){
  return this._id
});


module.exports = mongoose.model('User', UserSchema);
