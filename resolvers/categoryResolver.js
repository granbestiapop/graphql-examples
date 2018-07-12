const Resolver =  {
  custom_field: async (data, args)=>{
    console.log(data);
    return `esta categoria tiene ${data.total_items_in_this_category} items`;
  }
}

module.exports = Resolver;