const { gql } = require('apollo-server');

const typeDefs = gql`
  # Schema definitions go here

  type Query {
    "Query to set tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specfic topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author for a certain Track"
  type Author {
    id: ID!
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
