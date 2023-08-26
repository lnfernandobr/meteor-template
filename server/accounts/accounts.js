import { Accounts } from 'meteor/accounts-base';

import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: '',
        loginStyle: 'popup',
        secret: '',
      },
    }
  );
});

Accounts.onCreateUser((user, originalUser) => ({
    ...originalUser,
    email: originalUser.services.google.email,
    picture: originalUser.services.google.picture,
    auth: {
      accessToken: originalUser.services.google.accessToken,
    },
  }));
