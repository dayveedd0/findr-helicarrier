import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//setting up link between client and server graphql
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(
        "Error Connecting to server please check that server is running on localhost port 6969"
      );
    });
  }
});

//Link to the server to fetch data
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

//export Client to use in Apollo provider
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
