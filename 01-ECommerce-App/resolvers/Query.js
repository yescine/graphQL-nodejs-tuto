const { categories, reviews,products } = require('../data')

exports.Query = {
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
  products: (_,{filter,...rest},{products}) => {
    let filteredPro = products
    console.log({rest})
    if(rest.All) return products
    if(filter){
      const {onSale} = filter
      return filteredPro.filter(elem=>elem.onSale===onSale)
    }
    return filteredPro
  },
  product: (_, args, ctx) => {
    const product = products.find(elem => elem.id === args.id)
    return product ? product : null
  },
  categories: () => {
    return categories
  },
  category: (_, args, ctx) => {
    const categorie = categories.find(elem => elem.id === args.id)
    return categorie ? categorie : null
  },
}