const categoryClient = require('../clients/categories');
const Resolver =  {
  category: async (data)=>{
    const {category_id} = data;
    const category = await categoryClient.getCategory(category_id);
    console.log(category);
    return category;
  }
}

module.exports = Resolver;