import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import cache from "./cache";

// Links
import stateLink from "./stateLink";
import schemaLink from "./schemaLink";

const client = new ApolloClient({
  cache,
  // Links are composable!
  link: ApolloLink.from([stateLink, schemaLink]),
  connectToDevTools: true
});

export default client;
