const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')
const schema = require('./schema')
const api = require('./utils')
const app = express()

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(schema),
    rootValue: {
      createOrder: async (args) => {
        try {
          let result = await api.createOrder(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listOrders: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listOrders(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createCustomer: async (args) => {
        try {
          let result = await api.createCustomer(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createPaymentType: async (args) => {
        try {
          let result = await api.createPaymentType(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createDeliveryType: async (args) => {
        try {
          let result = await api.createDeliveryType(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createOrderType: async (args) => {
        try {
          let result = await api.createOrderType(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listUsers: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listUsers(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createUser: async (args) => {
        try {
          let result = await api.createUser(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createUserGroup: async (args) => {
        try {
          let result = await api.createUserGroup(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createOrderMethod: async (args) => {
        try {
          let result = await api.createOrderMethod(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listOrderMethods: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listOrderMethods(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getOrderMethod: async (args) => {
        try {
          let result = await api.getOrderMethod(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateOrderMethod: async (args) => {
        try {
          let result = await api.updateOrderMethod(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteOrderMethod: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteOrderMethod(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createBucket: async (args) => {
        try {
          let result = await api.createBucket(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listBuckets: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listBuckets(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getBucket: async (args) => {
        try {
          let result = await api.getBucket(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateBucket: async (args) => {
        try {
          let result = await api.updateBucket(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteBucket: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteBucket(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createFavorites: async (args) => {
        try {
          let result = await api.createFavorites(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listFavorites: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listFavorites(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getFavorites: async (args) => {
        try {
          let result = await api.getFavorites(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateFavorites: async (args) => {
        try {
          let result = await api.updateFavorites(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteFavorites: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteFavorites(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createPriceType: async (args) => {
        try {
          let result = await api.createPriceType(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listPriceTypes: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listPriceTypes(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getPriceType: async (args) => {
        try {
          let result = await api.getPriceType(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updatePriceType: async (args) => {
        try {
          let result = await api.updatePriceType(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deletePriceType: async (args) => {
        try {
          const { id } = args
          let result = await api.deletePriceType(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createCourier: async (args) => {
        try {
          let result = await api.createCourier(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listCouriers: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listCouriers(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getCourier: async (args) => {
        try {
          let result = await api.getCourier(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateCourier: async (args) => {
        try {
          let result = await api.updateCourier(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteCourier: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteCourier(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createUnit: async (args) => {
        try {
          let result = await api.createUnit(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listUnits: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listUnits(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getUnit: async (args) => {
        try {
          let result = await api.getUnit(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateUnit: async (args) => {
        try {
          let result = await api.updateUnit(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteUnit: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteUnit(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createCostGroup: async (args) => {
        try {
          let result = await api.createCostGroup(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listCostGroups: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listCostGroups(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getCostGroup: async (args) => {
        try {
          let result = await api.getCostGroup(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateCostGroup: async (args) => {
        try {
          let result = await api.updateCostGroup(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteCostGroup: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteCostGroup(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createCostItem: async (args) => {
        try {
          let result = await api.createCostItem(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listCostItems: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listCostItems(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getCostItem: async (args) => {
        try {
          let result = await api.getCostItem(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateCostItem: async (args) => {
        try {
          let result = await api.updateCostItem(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteCostItem: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteCostItem(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createStatusGroup: async (args) => {
        try {
          let result = await api.createStatusGroup(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listStatusGroups: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listStatusGroups(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getStatusGroup: async (args) => {
        try {
          let result = await api.getStatusGroup(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateStatusGroup: async (args) => {
        try {
          let result = await api.updateStatusGroup(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteStatusGroup: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteStatusGroup(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createStatus: async (args) => {
        try {
          let result = await api.createStatus(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listStatuses: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listStatuses(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getStatus: async (args) => {
        try {
          let result = await api.getStatus(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateStatus: async (args) => {
        try {
          let result = await api.updateStatus(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteStatus: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteStatus(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createGeneralSettings: async (args) => {
        try {
          let result = await api.createGeneralSettings(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listGeneralSettings: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listGeneralSettings(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getGeneralSettings: async (args) => {
        try {
          let result = await api.getGeneralSettings(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateGeneralSettings: async (args) => {
        try {
          let result = await api.updateGeneralSettings(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteGeneralSettings: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteGeneralSettings(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createTransitionStatuses: async (args) => {
        try {
          let result = await api.createTransitionStatuses(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listTransitionStatuses: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listTransitionStatuses(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getTransitionStatuses: async (args) => {
        try {
          let result = await api.getTransitionStatuses(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateTransitionStatuses: async (args) => {
        try {
          let result = await api.updateTransitionStatuses(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteTransitionStatuses: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteTransitionStatuses(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createFilter: async (args) => {
        try {
          let result = await api.createFilter(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listFilters: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listFilters(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getFilter: async (args) => {
        try {
          let result = await api.getFilter(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updateFilter: async (args) => {
        try {
          let result = await api.updateFilter(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deleteFilter: async (args) => {
        try {
          const { id } = args
          let result = await api.deleteFilter(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      createPlatformSettings: async (args) => {
        try {
          let result = await api.createPlatformSettings(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      listPlatformSettings: async (args) => {
        try {
          const filter = args?.filter || {}
          let result = await api.listPlatformSettings(filter)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      getPlatformSettings: async (args) => {
        try {
          let result = await api.getPlatformSettings(args.id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      updatePlatformSettings: async (args) => {
        try {
          let result = await api.updatePlatformSettings(args.input)
          return result
        } catch (err) {
          console.log(err)
        }
      },
      deletePlatformSettings: async (args) => {
        try {
          const { id } = args
          let result = await api.deletePlatformSettings(id)
          return result
        } catch (err) {
          console.log(err)
        }
      },
    },
    graphiql: true,
  })
)

mongoose
  .connect('mongodb://localhost/graphql', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err)
  })
