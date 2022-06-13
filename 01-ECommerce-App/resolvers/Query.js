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
  products: (_,{filter,...rest},{products,reviews}) => {
    let filteredPro = products

    if(filter){
      const {onSale,avrRating} = filter
      filteredPro = filteredPro.filter(elem=>elem.onSale===onSale)
      if(avrRating){

        return filteredPro.filter(prod=>{
          const rev = reviews.find(elem=>elem.productId===prod.id)
          if (Math.round(rev.rating)===avrRating) return true
        })
      }
      return filteredPro
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