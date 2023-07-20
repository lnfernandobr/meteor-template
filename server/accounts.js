Accounts.onCreateUser((_, originalUser) => {
  return {
    ...originalUser,
    email: originalUser.emails[0].address,
  };
});
