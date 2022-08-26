const { ApolloServer, gql } = require("apollo-server")

exports.typeDefs = gql`
type Query {
  hello:String
  noAnimals:Int
  price:Float,
  isAdmin:Boolean,
  roles:[String!]!
  products(filter:productFilter):[Product!]!
  product(id:ID!):Product 
  categories:[Category!]!
  category(id:ID):Category
}

type Mutation {
  addCategory(input:AddCategoryInput!): Category!
  addProduct(input:AddProductInput!): Product!
  deleteCategory(id:ID!):Boolean!
  updateCategory(id:ID!,input:UpdateCategoryInput):Boolean!

}

type Product {
  id:String!
  name: String!
  description: String!
  quantity:Int
  price: Float!
  onSale:Boolean
  category:Category
  reviews:[Review!]!
}

type Category {
  id:ID!
  name:String!
  products(filter:productFilter):[Product!]!
}

type Review {
  id:ID!
  date:String!
  title:String
  comment:String
  rating:Int
}
input productFilter {
  onSale:Boolean!
  avrRating:Int
}

input AddCategoryInput {
  name:String!
}

input AddProductInput {
  name:String
  image:String
  description:String
  categoryId:String
  onSale:Boolean
  price: Float
  quantity: Int
}

input UpdateCategoryInput {
  name:String!
}

`