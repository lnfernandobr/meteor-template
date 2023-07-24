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
      alert(
        "This link has expired but you can still access it with the Invitation Code from the email",
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
