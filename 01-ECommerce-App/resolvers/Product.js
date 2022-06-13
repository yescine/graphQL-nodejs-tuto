const { categories, reviews,products } = require('../data')

exports.Product={
  category:(_,args,ctx)=>{
    const id = _.categoryId
    return categories.find(elem => elem.id === id)
  }
}