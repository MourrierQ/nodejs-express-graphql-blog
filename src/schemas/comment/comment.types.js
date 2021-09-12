const gql = require('graphql-tag');

module.exports = gql`

  type Comment {
    user: User!
    date: Date!
    content: String!
  }

  type Query {
    getCommentsByPostId(id: ID!): [Comment]
  }

  type Mutation {
    createComment(input: CommentCreationInput): Comment
    updateComment(input: CommentUpdateInput): Comment
  }



  input CommentCreationInput {
    userId: ID!
    content: String!
  }

  input CommentUpdateInput {
    id: ID!
    content: String!
  }

`;