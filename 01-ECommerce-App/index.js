const { ApolloServer, gql } = require("apollo-server")
const { categories, reviews,products } = require('./data')
// const products = require('./data/product')

const typeDefs = gql`
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
      return ["some", "data", "null"]
    },
    products: () => {
      return product
    },
    product: (_, args, ctx) => {
      const product = products.find(elem => elem.id === args.id)
      return product ? product : null
    },
    categories:()=>{
      return categories
    },
    category:(_,args,ctx)=>{
      const categorie = categories.find(elem => elem.id === args.id)
      return categorie ? categorie : null 
    },
  },
  Category:{
    products:(_,args,context)=>{
      const catId = _.id
      return products.filter(elem => elem.categoryId === catId)
    }
  },
  Product:{
    category:(_,args,ctx)=>{
      const id = _.categoryId
      return categories.find(elem => elem.id === id)
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