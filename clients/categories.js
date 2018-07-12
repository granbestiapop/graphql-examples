const request = require('request-promise');


class Client {

  static getCategory(categoryId){
    const  options = {
      uri: `https://api.mercadolibre.com/categories/${categoryId}`,
      json: true,
    };
    return request(options);
  }
}

module.exports = Client;