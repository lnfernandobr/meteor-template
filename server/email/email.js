import sgMail from "@sendgrid/mail";
import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";

const apiKey = Meteor.settings.sendGrid.SENDGRID_API_KEY;

sgMail.setApiKey(apiKey);

export const sendEmail = async ({ to, html, subject }, isVerbose = false) => {
  const msg = {
    to,
    from: "noreply@yourapp.com",
    subject,
    html,
  };

  await sgMail
    .send(msg)
    .then(() => {
      if (isVerbose) {
        // eslint-disable-next-line no-console
        console.log(`Email sent to ${to}`);
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error({
        message: `Error trying to send an email to ${to}.`,
        error,
      });
    });
};

Meteor.startup(function () {
  process.env.MAIL_URL = `smtp://apikey:${apiKey}@smtp.sendgrid.net:587`;
});

Email.customTransport = ({ to, subject, html }) => {
  sendEmail({
    to,
    subject,
    html,
  });
};
