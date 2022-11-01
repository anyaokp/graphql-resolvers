const { Schema, model } = require('mongoose')

const TransitionStatusesSchema = new Schema(
  {
    orderTypeId: { type: String, ref: 'Order-type' },
    userGroupId: { type: String, rer: 'User-group' },
    matrix: { type: String },
  },
  { timestamps: true, versionKey: false }
)

TransitionStatusesSchema.set('toObject', { virtuals: true })
TransitionStatusesSchema.set('toJSON', { virtuals: true })

TransitionStatusesSchema.virtual('userGroup', {
  ref: 'User-group',
  localField: 'userGroupId', 
  foreignField: '_id',
  justOne : true
})


TransitionStatusesSchema.virtual('orderType', {
  ref: 'Order-type',
  localField: 'orderTypeId', 
  foreignField: '_id' ,
  justOne : true
})

TransitionStatusesSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Transition-statuses', TransitionStatusesSchema)
