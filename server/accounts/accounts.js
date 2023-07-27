import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser((_, originalUser) => ({
  ...originalUser,
  email: originalUser.emails[0].address,
}));
