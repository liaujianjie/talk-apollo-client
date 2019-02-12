import { InMemoryCache } from "apollo-cache-inmemory";

// This seems silly, but we have to do this because we're sharing this cache in
// multiple places.
const cache = new InMemoryCache();

export default cache;
