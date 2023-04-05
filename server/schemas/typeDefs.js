const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: string
    bookId: string
    image: string
    forSAle: string
    link: string
    title: string
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    saveBooks: [Book]!
  }

  input SaveBookInput {
    authors: [String]
    description: string
    bookId: string
    image: string
    forSAle: string
    link: string
    title: string

  }
    type Auth {
      token: ID!
      user: User
    }
    
  
  type query {
    me: User
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: string!, pasword; string!): auth
   saveBook(book: saveBookInput) User
   removeBook(bookId: String!): User
    
   
  }
`;

module.exports = typeDefs;