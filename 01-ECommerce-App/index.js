const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    hello:String
    noAnimals:Int
    price:Float,
    isAdmin:Boolean
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return "hello any"
    },
    noAnimals: () => {
      return 55
    },
    price: () => {
      return 99.99
    }
  }
}
const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen()
  .then(res => {
    console.log(`server is listening`, res.url)
  })