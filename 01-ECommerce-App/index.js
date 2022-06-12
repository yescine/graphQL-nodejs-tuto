const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    hello:String
  }
`

const resolvers = {
  Query:{
    hello:()=>{
      return "hello world"
    }
  }
}
const server = new ApolloServer({
  typeDefs,resolvers
})

server.listen()
  .then(res => {
    console.log(`server is listening`, res.url)
  })