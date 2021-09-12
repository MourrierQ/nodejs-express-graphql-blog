require('dotenv').config();
require('./src/models/User.js');
require('./src/models/Post.js');
require('./src/models/Comment.js');
const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./src/schemas');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to mongoDB");
}, (err) => {
  console.log(err);
});


// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
