import { neo4jgraphql } from "neo4j-graphql-js";

export const typeDefs = `
type Program {
  id: ID!
  name: String
  type: String
  url: String
  courses(first: Int = 10, offset: Int = 0): [Course] @relation(name: "UnderProgram", direction: "IN")
}

type Course {
  id: ID!
  name: String
  description: String
  similarmoocs(first: Int = 10, offset: Int = 0): [MOOC] @relation(name: "SimilarTo", direction: "OUT")
}

type MOOC {
  id: ID!
  name: String
  image: String
  description: String
  url: String
}

type User {
  id: ID!
  name: String
  friends(first: Int = 10, offset: Int = 0): [User] @relation(name: "FRIENDS", direction: "BOTH")
  reviews(first: Int = 10, offset: Int = 0): [Review] @relation(name: "WROTE", direction: "OUT")
  avgStars: Float @cypher(statement: "MATCH (this)-[:WROTE]->(r:Review) RETURN toFloat(avg(r.stars))")
}

type Business {
  id: ID!
  name: String
  address: String
  city: String
  state: String
  reviews(first: Int = 10, offset: Int = 0): [Review] @relation(name: "REVIEWS", direction: "IN")
  categories(first: Int = 10, offset: Int =0): [Category] @relation(name: "IN_CATEGORY", direction: "OUT")
}

type Review {
  id: ID!
  stars: Int
  text: String
  business: Business @relation(name: "REVIEWS", direction: "OUT")
  user: User @relation(name: "WROTE", direction: "IN")
}

type Category {
  name: ID!
  businesses(first: Int = 10, offset: Int = 0): [Business] @relation(name: "IN_CATEGORY", direction: "IN")
}

type Query {
    users(id: ID, name: String, first: Int = 10, offset: Int = 0): [User]
    businesses(id: ID, name: String, first: Int = 10, offset: Int = 0): [Business]
    reviews(id: ID, stars: Int, first: Int = 10, offset: Int = 0): [Review]
    category(name: ID!): Category
    
    program(id: ID, name: String, type: String, url: String, first: Int = 10, offset: Int = 0): [Program]
    course(id: ID, name: String, first: Int = 10, offset: Int = 0): [Course]
    mooc(id: ID, name: String, first: Int = 10, offset: Int = 0): [MOOC]
}
`;

export const resolvers = {
  Query: {
    users: neo4jgraphql,
    businesses: neo4jgraphql,
    reviews: neo4jgraphql,
    category: neo4jgraphql,
    
    program: neo4jgraphql,
    course: neo4jgraphql,
    mooc: neo4jgraphql
  }
};
