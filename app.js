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
