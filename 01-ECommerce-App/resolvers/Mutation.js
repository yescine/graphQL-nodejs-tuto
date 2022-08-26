const {v4:uuid} = require('uuid')
exports.Mutation = {
  addCategory:(parent,{input},ctx)=>{
    const newCategory = {
      id:uuid(),
      ...input
    }

    ctx.categories.push(newCategory)
    return newCategory
  },

  addProduct:(parent,{input},ctx)=>{
    const newCategory = {
      id:uuid(),
      ...input
    }

    ctx.products.push(newCategory)
    return newCategory
  },
  deleteCategory:(parent,{id},{categories})=>{
    categories = categories.filter(cat=>cat.id!==id)
    return true
  }
}