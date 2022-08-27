import { gql } from "apollo-server";

export const typeDefs = gql`

  type Query {
    hello: String
    posts:[Post!]!
  }

  type Mutation {
    postCreate(input:PostInp):PostPayload
    postUpdate(input:PostInp,postId:String):PostPayload
    postDelete(postId:String):PostPayload

  }

  input PostInp {
    title:String!
    content:String!
  }

  type UserError {
    message:String!
  }

  type PostPayload {
    userErrors: [UserError!]!
    post:Post
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    published: Boolean!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    profile: Profile!
    posts: [Post!]!
  }

  type Profile {
    id: ID!
    bio: String
    user: User!
  }
`;
