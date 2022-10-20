const { Schema, model } = require('mongoose')

const Country = new Schema({
  name: { type: String },
})

module.exports = model('Country', Country)
