import React, { createContext, useContext } from "react";
import { useTracker } from "meteor/react-meteor-data";

export const LoggedUserContext = createContext(null);

export const LoggedUserProvider = ({ children }) => {
  const loggedUser = useTracker(() => Meteor.user(), []);

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        isLoading: !loggedUser,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};

export const useLoggedUser = () => useContext(LoggedUserContext);
