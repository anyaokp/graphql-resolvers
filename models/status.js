const { Schema, model } = require('mongoose')

const StatusSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, default: true  },
    ordering: { type: Number, required: true },
    groupId: { type: String, required: true, ref: 'Status-group'},
    color: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
)

StatusSchema.virtual('id').get(function () {
  return this._id
})

module.exports = model('Status', StatusSchema)
