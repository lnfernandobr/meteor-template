import { useEffect, useState } from "react";
import { loginWithToken } from "../utils/loginWithToken";

export const useAuthentication = (authToken) => {
  const [loading, setLoading] = useState(false);

  const start = async () => {
    if (!authToken) {
      return;
    }
    try {
      await loginWithToken(authToken);
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert(
        "This link has expired",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    start();
  }, []);

  return { loading };
};
