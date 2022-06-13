
exports.Category={
  products:({id},args,{products})=>{
    return products.filter(elem => elem.categoryId === id)
  }
}