
exports.Product={
  category:({categoryId},args,{categories})=>{
    return categories.find(elem => elem.id === categoryId)
  }
}