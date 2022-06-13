
exports.Product={
  category:({categoryId},args,{categories})=>{
    return categories.find(elem => elem.id === categoryId)
  },
  reviews:({id},args,{reviews})=>{
    return reviews.filter(rev=>rev.productId===id)
  }
}