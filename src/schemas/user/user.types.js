const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type LoginResponse {
    token: String
    error: String
  }

  type Query {
    login(input: UserLogin!): LoginResponse
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: UserCreationMutation): User
    updateUser(input: UserUpdateMutation): User
    deleteUser: String
  }

  input UserLogin {
    email: String!
    password: String!
  }

  input UserCreationMutation {
    password: String!
    username: String!
    email: String!
  }

    input UserUpdateMutation {
    id: ID!
    username: String
    email: String
  }
`;

module.exports = typeDefs;