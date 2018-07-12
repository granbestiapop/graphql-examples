const schema = `

type Category{
  id: String
  name: String
  custom_field: String
}

type Item {
  id: String
  price: Float
  original_price: Float
  title: String
  category_id: String
  category: Category
}

type Query {
  items(itemId:String): Item
}

schema {
  query: Query
}
`;

module.exports = schema;