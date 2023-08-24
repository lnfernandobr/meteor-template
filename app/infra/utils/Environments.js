import { Meteor } from 'meteor/meteor';

export const Environments = {
  isDevelopment: Meteor.settings.environment === 'DEVELOPMENT',
};
