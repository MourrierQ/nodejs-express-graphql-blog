const {makeExecutableSchema} = require('@graphql-tools/schema');
const merge = require('lodash.merge');

const scalarSchema = require('./scalar');
const userSchema = require('./user');
const postSchema = require('./post');
const commentSchema = require('./comment');

const schema = makeExecutableSchema({
  typeDefs: [scalarSchema.typeDefs, userSchema.typeDefs, postSchema.typeDefs, commentSchema.typeDefs],
  resolvers: merge(
    scalarSchema.resolver,
    userSchema.resolver,
    postSchema.resolver,
    commentSchema.resolver
  )
});

module.exports = schema;