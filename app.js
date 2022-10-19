const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const schema = require('./schema')
const api = require('./utils')
const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(schema),
    rootValue: {
      createUser: async (args) => {
        try {
          let user  = await api.createUser(args.input)
          return user
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
      getUser: async (args) => {
        try {
          let user = await api.getUser(args.id)
          return user
        } catch (err) {
          console.log(err)
        }
      },
      updateUser: async (args) => {
        try {
          let user = await api.updateUser(args.input)
          return user
        } catch (err) {
          console.log(err)
        }
      },
      deleteUser:  async (args) => {
        try {
          const { id } = args
          let user = await api.deleteUser(id)
          return user
        } catch (err) {
          console.log(err)
        }  
      }
    },
    graphiql: true
  })
);

mongoose
  .connect('mongodb://localhost/graphql', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
