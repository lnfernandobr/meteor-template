import { createCollection } from 'meteor/quave:collections';
import { Meteor } from 'meteor/meteor';
import { UserSchema } from './UserSchema';

export const UsersCollection = createCollection({
  instance: Meteor.users,
  schema: UserSchema,
  collection: {},
});
