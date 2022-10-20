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
