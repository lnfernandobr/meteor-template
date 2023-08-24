import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';
import { resolvers, typeDefs } from './schemas';

(async function () {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => ({
      user: await getUser(req.headers.authorization),
    }),
  });

  await server.start();
  server.applyMiddleware({
    app: WebApp.connectHandlers,
    path: '/graphql',
  });

  WebApp.connectHandlers.use('/graphql', (req, res) => {
    if (req.method === 'GET') {
      res.end();
    }
  });
}());
