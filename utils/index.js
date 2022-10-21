const User = require('./user')
const Country = require('./country')
const Region = require('./region')
const City = require('./city')
const UserGroup = require('./userGroup')
const OrderType = require('./orderType')
const DeliveryType = require('./deliveryType')
const PaymentStatus = require('./paymentStatus')
const PaymentType = require('./paymentType')
const WareHouse = require('./wareHouse')
const Shop = require('./shop')
const Contragent = require('./contragent')
const OrderMethod = require('./orderMethod')
const Bucket = require('./bucket')
const Favorite = require('./favorite')
const PriceType = require('./priceType')

module.exports = {
  ...User,
  ...Country,
  ...Region,
  ...City,
  ...UserGroup,
  ...OrderType,
  ...DeliveryType,
  ...PaymentStatus,
  ...PaymentType,
  ...WareHouse,
  ...Shop,
  ...Contragent,
  ...OrderMethod,
  ...Bucket,
  ...Favorite,
  ...PriceType,
}
