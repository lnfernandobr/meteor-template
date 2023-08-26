import SimpleSchema from 'simpl-schema';

export const UserSchema = new SimpleSchema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  createdAt: Date,
  updatedAt: Date,
  emails: { type: Array, optional: true },
  'emails.$': Object,
  'emails.$.address': String,
  'emails.$.verified': Boolean,
  services: { type: Object, blackbox: true },
});
