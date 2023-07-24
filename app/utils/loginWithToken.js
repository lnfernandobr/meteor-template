import { Meteor } from "meteor/meteor";

export const loginWithToken = async (token) =>
  new Promise((resolve, reject) => {
    Meteor.loginWithToken(token, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
