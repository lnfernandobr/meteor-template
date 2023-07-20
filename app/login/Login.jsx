import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutePaths";
import { TextField } from "../components/Textfield";
import { Button } from "../components/Button";

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
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-end w-full border-1">
        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="underline text-blue-500 text-start m-4"
        >
          {isRegister ? "I want to login" : "I want to create a new account"}
        </button>
      </div>

      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl mb-4 text-gray-600">Your app</h1>
        <form onSubmit={onSubmi} className="flex flex-col w-1/3 gap-2 ">
          {isRegister && (
            <TextField
              type="text"
              name="name"
              onChange={onChange}
              value={form.name}
              required
              placeholder="Name"
            />
          )}
          <TextField
            type="email"
            name="email"
            onChange={onChange}
            value={form.email}
            required
            placeholder="Email"
          />
          <TextField
            type="password"
            name="password"
            onChange={onChange}
            value={form.password}
            required
            place
            holder="Password"
          />

          <Button type="submit">{isLoading ? "loading..." : "Submit"}</Button>
        </form>
      </div>
    </div>
  );
};
