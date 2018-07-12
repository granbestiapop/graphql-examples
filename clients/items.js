const request = require('request-promise');


class Client {

  static getItem(itemId){
    console.log('getting item', itemId);
    const  options = {
      uri: `https://api.mercadolibre.com/items/${itemId}`,
      json: true,
    };
    return request(options);
  }
}

module.exports = Client;