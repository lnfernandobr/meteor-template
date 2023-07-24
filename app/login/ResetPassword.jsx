import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Route, useNavigate } from "react-router-dom";
import { TextField } from "../components/Textfield";
import { Button } from "../components/Button";
import { methodCall } from "../utils/methodCall";
import { Root } from "postcss";
import { RoutePaths } from "../routes/RoutePaths";

export const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { form, onChange, setForm } = useForm({ password: "" });

  const onSubmi = (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      methodCall("updateUserPassword", { newPassword: form.password }).then(
        () => {
          setForm({});
          alert("Password updated!");
          navigate(RoutePaths.ROOT);
        },
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-fullflex flex-col flex flex-1 h-full justify-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl mb-4 text-gray-600">Updating password</h1>
        <form onSubmit={onSubmi} className="flex flex-col w-1/3 gap-2 ">
          <TextField
            type="password"
            name="password"
            onChange={onChange}
            value={form.password}
            required
            placeholder="Password"
          />
          <Button type="submit">
            {isLoading ? "Updating..." : "Update password"}
          </Button>
        </form>
      </div>
    </div>
  );
};
