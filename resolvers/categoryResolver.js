const Resolver =  {
  custom_field: async (data, args)=>{
    return `esta categoria tiene ${data.total_items_in_this_category} items`;
  }
}

module.exports = Resolver;