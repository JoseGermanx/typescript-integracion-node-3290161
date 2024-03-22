import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema.graphql';
import resolvers from './graphql/resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
