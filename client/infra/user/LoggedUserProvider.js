import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { LOGGED_USER_QUERY } from './user.queries';

export const LoggedUserContext = createContext(null);

export const LoggedUserProvider = ({ children }) => {
  const {
    data: { loggedUser } = {},
    loading,
    refetch,
    error,
  } = useQuery(LOGGED_USER_QUERY);

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        loading,
        error,
        refetchLoggedUser: refetch,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};

export const useLoggedUser = () => useContext(LoggedUserContext);
