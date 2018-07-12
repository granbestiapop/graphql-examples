const request = require('request-promise');


class Client {

  static getItem(itemId){
    const  options = {
      uri: `https://api.mercadolibre.com/items/${itemId}?caller.scopes=admin`,
      json: true,
    };
    return request(options);
  }

  static getItems(itemIds){
    console.log('getting items', itemIds);
    const ids = itemIds.join(',');
    const  options = {
      uri: `https://api.mercadolibre.com/items?ids=${ids}?caller.scopes=admin`,
      json: true,
    };
    return request(options);
  }
}

module.exports = Client;