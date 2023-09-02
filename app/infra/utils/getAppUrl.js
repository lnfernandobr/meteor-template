import { Meteor } from "meteor/meteor";

export const getAppUrl = () => {
  return Meteor.absoluteUrl();
};
