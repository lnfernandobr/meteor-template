import { Meteor } from "meteor/meteor";
import { generateAuthToken } from "./accounts";
import { RoutePaths } from "../app/routes/RoutePaths";
import { sendEmail } from "./email/email";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({
  userForgotPassword({ email }) {
    this.unblock();
    if (Meteor.isClient) {
      return;
    }
    if (!email) {
      throw new Error("email is required");
    }

    const userDb = Meteor.users.findOne(
      { email },
      { fields: { _id: 1, email: 1 } },
    );

    if (!userDb) {
      // eslint-disable-next-line no-alert
      console.warn("User not found");
      return;
    }

    const tokenForAuthentication = generateAuthToken(userDb);
    const linkForAccessAccountsAndChangePassword = Meteor.absoluteUrl(
      `/${RoutePaths.RESET_PASSWORD}?auth_token=${tokenForAuthentication}`,
    );

    sendEmail(
      {
        to: userDb.email,
        subject: "Reset password",
        html: `<p>You can update your password here: ${linkForAccessAccountsAndChangePassword}`,
      },
      true,
    );
  },

  updateUserPassword({ newPassword }) {
    this.unblock();
    if (Meteor.isClient || !this.userId) {
      return;
    }

    const userDb = Meteor.users.findOne(this.userId, {
      fields: { _id: 1, email: 1 },
    });
    Accounts.setPassword(userDb._id, newPassword, { logout: false });

    sendEmail(
      {
        to: userDb.email,
        subject: "Password updated",
        html: "<p>Your password was updated with success!",
      },
      true,
    );
  },
});
