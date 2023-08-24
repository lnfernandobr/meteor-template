import { UserResolver } from '../user/user.resolver';
import UserSchema from '../user/user.schema.graphql';

export const resolvers = [UserResolver];
export const typeDefs = [UserSchema];
