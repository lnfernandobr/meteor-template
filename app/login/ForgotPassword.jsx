import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { TextField } from "../components/Textfield";
import { Button } from "../components/Button";
import { methodCall } from "../utils/methodCall";

export const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { form, onChange, setForm } = useForm({ email: "" });

  const onSubmi = (event) => {
    event.preventDefault();

    setIsLoading(true);
    const email = form.email.trim().toLowerCase();

    try {
      methodCall("userForgotPassword", { email });
      alert(`We sent an email to ${email}. Check your spam as well`);
      setForm({ email: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-3xl mb-4 text-gray-600">Your app</h1>
        <p className="mb-4 text-gray-600">
          We will send instructions to your email to reset your password.
        </p>

        <form onSubmit={onSubmi} className="flex flex-col w-1/3 gap-2 ">
          <TextField
            type="email"
            name="email"
            onChange={onChange}
            value={form.email}
            required
            placeholder="Email"
          />
          <Button type="submit">
            {isLoading ? "loading..." : "Reset password"}
          </Button>
          <Button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-red-500  hover:bg-red-800"
          >
            Back
          </Button>
        </form>
      </div>
    </div>
  );
};
