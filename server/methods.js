import { Meteor } from "meteor/meteor";
import { generateAuthToken } from "./accounts";
import { RoutePaths } from "../app/routes/RoutePaths";
import { sendEmail } from "./email/email";

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
});
