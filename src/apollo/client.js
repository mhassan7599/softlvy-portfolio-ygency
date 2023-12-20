import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/clqdmlxg8avp301t8c1b01oh9/master', 
  cache: new InMemoryCache(),
});

export default client;