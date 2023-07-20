import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { form, onChange } = useForm({ name: "", email: "", password: "" });

  const handleLogin = (error) => {
    setIsLoading(false);
    if (error) {
      if (error.error === 403) {
        alert(
          isRegister
            ? "This account already exists"
            : "The password or email are incorrects",
        );
        return;
      }
      alert("Something unexpected happend");
      return;
    }

    // TODO I need to create a logged User provider or use a reactive userId to prevent reload.
    alert(
      isRegister
        ? "Account created with success.Reload the page"
        : "Login with success. Reload the page",
    );
    
    navigate(RoutePaths.ROOT);
  };

  const onSubmi = (event) => {
    event.preventDefault();

    setIsLoading(true);
    console.log(form);
    const email = form.email.trim().toLowerCase();

    if (!isRegister) {
      Meteor.loginWithPassword({ email }, form.password, handleLogin);
    } else {
      Accounts.createUser(
        {
          email,
          username: email,
          password: form.password,
          name: form.name,
        },
        handleLogin,
      );
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmi}>
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "I want to login" : "I want to create a new account"}
        </button>

        {isRegister && (
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={form.name}
            required
            placeholder="Name"
          />
        )}
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={form.email}
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={form.password}
          required
          placeholder="Password"
        />
        <button type="submit">{isLoading ? "loading..." : "Submit"}</button>
      </form>
    </div>
  );
};
