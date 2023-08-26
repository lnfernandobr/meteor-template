import { makeExecutableSchema } from '@graphql-tools/schema';
import { setup } from 'meteor/swydo:ddp-apollo';
import { resolvers, typeDefs } from './schemas';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

setup({
  schema,
});
