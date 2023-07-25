import { Meteor } from "meteor/meteor";
import { useGetURLParam } from "./useGetURLParam";
import { useLoggedUser } from "../providers/user/LoggedUserProvider";
import { useAuthentication } from "./useAuthentication";

export const useAuthenticate = () => {
  const authToken = useGetURLParam("auth_token") || null;

  const { loggedUser } = useLoggedUser();
  const isLoggingIn = Meteor.loggingIn();
  const { loading } = useAuthentication(authToken);

  return {
    loggedUser,
    isLoggingIn,
    isLoading: (isLoggingIn && !loggedUser) || loading,
  };
};
