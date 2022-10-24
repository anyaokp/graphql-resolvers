const { Schema, model } = require('mongoose')

const TransitionStatusesSchema = new Schema(
  {
    orderTypeId: { type: Schema.Types.ObjectId },
    orderType: { type: Schema.Types.ObjectId, ref: 'OrderType' },
    userGroupId: { type: Schema.Types.ObjectId },
    userGroup: { type: Schema.Types.ObjectId, ref: 'UserGroup' },
    matrix: { type: String },
  },
  { timestamps: true, versionKey: false }
)

TransitionStatusesSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Transition-statuses', TransitionStatusesSchema)
