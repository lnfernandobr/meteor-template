import { Accounts } from 'meteor/accounts-base';

import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: Meteor.settings.google.clientId,
        loginStyle: 'popup',
        secret: Meteor.settings.google.secret,
      },
    }
  );
});

Accounts.onCreateUser((user, originalUser) => ({
  ...originalUser,
  email: originalUser.services.google.email,
  picture: originalUser.services.google.picture,
  createdAt: new Date(),
  updatedAt: new Date(),
  auth: {
    accessToken: originalUser.services.google.accessToken,
  },
}));
