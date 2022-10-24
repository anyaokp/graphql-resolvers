const { Schema, model } = require('mongoose')

const Status = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean },
    ordering: { type: Number, required: true },
    group: { type: Schema.Types.ObjectId, required: true },
    groupInfo: { type: Schema.Types.ObjectId, ref: 'StatusGroup' },
  },
  { timestamps: true, versionKey: false, toObject: { virtuals: true } }
)

Status.virtual('id').get(function () {
  return this._id
})

module.exports = model('Status', Status)
