export const UserResolver = {
  Query: {
    async loggedUser(root, args, { user }) {
      if (!user) {
        return null;
      }
      return user;
    },
  },
};
