export const logout = () => {
  Meteor.logout(() => {
    window.location.href = "/";
  });
};
