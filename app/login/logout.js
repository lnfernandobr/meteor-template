import { Meteor } from "meteor/meteor";

export const logout = () => {
  Meteor.logout(() => {
    window.location.href = "/";
  });
};
