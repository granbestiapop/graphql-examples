const itemsClient = require('../clients/items');

// one api call (the commented line)
const getItems = (itemsIds)=>{
  //return itemsClient.getItems(itemsIds);
  return Promise.all(itemsIds.map(id=>{
    console.log('getting item with id', id);
    return itemsClient.getItem(id);
  }));
}

module.exports = {
  getItems,
}