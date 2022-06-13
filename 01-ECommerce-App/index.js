const { ApolloServer } = require("apollo-server")
const { typeDefs } = require('./schema')
const resolvers = require('./resolvers')
const data = require('./data')

const server = new ApolloServer({
  typeDefs, resolvers, context: {
    ...data
  }
})

server.listen()
  .then(res => {
    console.log(`server is listening`, res.url)
  })