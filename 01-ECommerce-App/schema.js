const { ApolloServer, gql } = require("apollo-server")

exports.typeDefs = gql`
type Query {
  hello:String
  noAnimals:Int
  price:Float,
  isAdmin:Boolean,
  roles:[String!]!
  products:[Product!]!
  product(id:ID!):Product 
  categories:[Category!]!
  category(id:ID):Category
}

type Product {
  id:String!
  name: String!
  description: String!
  quantity:Int
  price: Float!
  onSale:Boolean
  category:Category
}

type Category {
  id:ID!
  name:String!
  products:[Product!]!
}
`