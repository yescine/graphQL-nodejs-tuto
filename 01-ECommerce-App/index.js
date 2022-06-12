const { ApolloServer, gql } = require("apollo-server")

const products = require('./data/product')
const typeDefs = gql`
  type Query {
    hello:String
    noAnimals:Int
    price:Float,
    isAdmin:Boolean,
    roles:[String!]!
    products:[Product!]!
    product(id:ID!):Product 
  }

  type Product {
    id:String!
    name: String!
    description: String!
    quantity:Int
    price: Float!
    onSale:Boolean
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
    },
    roles: () => {
      return ["some","data","null"]
    },
    products:()=>{
      return product
    },
    product:(_,args,ctx)=>{
      const product = products.find(elem=>elem.id===args.id)
      return product?product:null
    }
  },
}
const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen()
  .then(res => {
    console.log(`server is listening`, res.url)
  })