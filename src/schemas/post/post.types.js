const gql = require('graphql-tag');

module.exports = gql`
  type Post {
    _id: String
    title: String
    date: Date
    content: String
  }

  type Query {
    getPostById(id: String!): Post
    getPosts: [Post]
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(input: UpdatePostInput!): Post
    deletePost(id: String!): String
  }

  input CreatePostInput {
    title: String!
    content: String!
    userId: ID!
  }

  input UpdatePostInput {
    id: String!
    title: String
    content: String
  }

`;