import { withClientState } from "apollo-link-state";
import cache from "./cache";

// This link is used to store local-only states.
// Example: user preferences that are not persisted to a backend.
const stateLink = withClientState({
  cache
});

export default stateLink;
