import { Accounts } from "meteor/accounts-base";

export const generateAuthToken = (user) => {
  const accessToken = Accounts._generateStampedLoginToken();
  Accounts._insertLoginToken(user._id, accessToken);
  return accessToken.token;
};

Accounts.onCreateUser((_, originalUser) => ({
  ...originalUser,
  email: originalUser.emails[0].address,
}));
