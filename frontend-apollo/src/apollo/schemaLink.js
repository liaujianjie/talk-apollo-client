import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import gql from "graphql-tag";
import axios from "axios";

const typeDefs = gql`
  type Query {
    ping: String!
    articles: [Article!]!
    comments(articleId: String!): [Comment!]!
  }

  type Mutation {
    signIn(username: String!, password: String!): SignInPayload!
  }

  type SignInPayload {
    id: ID!
    created: String!
    ttl: Int!
    userId: ID!
  }

  type Article {
    id: ID!
    title: String!
    body: String!
    owner: Owner!
  }

  type Book {
    id: ID!
    title: String!
    contents: String!
    owner: Owner!
  }

  type Comment {
    id: ID!
    message: String!
    owner: Owner!
  }

  type Owner {
    id: ID!
  }

  scalar ISODateTime
`;

const resolvers = {
  Mutation: {
    signIn: async (_parent, credentials) => {
      const { data } = await axios.post("/Users/login", credentials);
      console.log("auth shit", data);
      return data;
    }
  },
  Query: {
    ping: () => "pong",
    articles: async () => {
      const { data } = await axios.get("/Articles");
      return data.map(denormalizeOwner);
    },
    comments: async (_parent, { articleId }) => {
      const { data } = await axios.get(`/Articles/${articleId}/comments`);
      return data.map(denormalizeOwner);
    }
  }
};

/**
 * Change this:
 * {
 *   ...,
 *   ownerId: 123
 * }
 *
 * To this:
 * {
 *   ...,
 *   owner: { id: 123 }
 * }
 */
const denormalizeOwner = ({ ownerId, ...entity }) => ({
  ...entity,
  owner: { id: ownerId }
});

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

const schemaLink = new SchemaLink({ schema: executableSchema });

export default schemaLink;
