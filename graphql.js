const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const Dataloader = require('dataloader');

const itemsService = require('./services/item');
const itemsClient = require('./clients/items');
const itemResolver = require('./resolvers/itemResolver');
const categoryResolver = require('./resolvers/categoryResolver');
/**
 * Schema import
 */
const typeDefs = require('./schema');

const RootResolver = {
  items : async(params, context)=>{
    const items =  await itemsClient.getItem(params.itemId);
    return items;
  },
  items_multi: (params, context)=>{
    const {items} = params;
    const promises = items.map((id)=> context.itemsService.load(id));
    return promises;
  }
};


const resolvers = {
  Item: itemResolver,
  Category: categoryResolver,
}

/**
 * Create schema
 */
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});




const router = express.Router();
router.use('/', graphqlHTTP((req) =>{
  const context = {
      domain: req.headers['accept-language'],
      itemsService: new Dataloader(itemsService.getItems),
  };
    return{
      schema: executableSchema,
      graphiql: true,
      rootValue: RootResolver,
      context,
    }
}));


module.exports = router;