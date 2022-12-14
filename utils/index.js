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
const Courier = require('./courier')
const Unit = require('./unit')
const CostGroup = require('./costGroup')
const CostItem = require('./costItem')
const StatusGroup = require('./statusGroup')
const Status = require('./status')
const GeneralSettings = require('./generalSettings')
const TransitionStatuses = require('./transitionStatuses')
const Filter = require('./filter')
const PlatformSettings = require('./platformSettings')
const Customer = require('../../customer')
const Order = require('./order')

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
  ...Courier,
  ...Unit,
  ...CostGroup,
  ...CostItem,
  ...StatusGroup,
  ...Status,
  ...GeneralSettings,
  ...TransitionStatuses,
  ...Filter,
  ...PlatformSettings,
  ...Customer,
  ...Order
}
