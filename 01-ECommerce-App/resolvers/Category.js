const { categories, reviews,products } = require('../data')

exports.Category={
  products:(_,args,context)=>{
    const catId = _.id
    return products.filter(elem => elem.categoryId === catId)
  }
}