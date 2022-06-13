
exports.Category={
  products:({id},{filter},{products})=>{
    const catProd = products.filter(elem => elem.categoryId === id)
    if(filter){
      const {onSale} = filter
      return catProd.filter(elem=>elem.onSale===onSale)
    }
    return catProd
  }
}