import { UsersCollection } from './usersCollection';

export const UserResolver = {
  Query: {
    async loggedUser(root, args, { userId }) {
      if (!userId) {
        return null;
      }
      return UsersCollection.findOne(userId);
    },
  },
};
