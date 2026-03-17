"use client";

import { useActionState } from "react";

import { createUser } from "@/utils/actions";
import SubmitButton from "./SubmitButton";

function Form() {
  const [state, submitAction, isPending] = useActionState(createUser, null);

  return (
    <form className={formStyle} action={submitAction}>
      <h2 className=' text-2xl capitalize mb-4'>create user</h2>

      <input
        className={inputStyle}
        type='text'
        name='firstName'
        defaultValue='peter'
        required
      />
      <input
        className={inputStyle}
        type='text'
        name='lastName'
        defaultValue='smit'
        required
      />

      <button className={btnStyle} disabled={isPending}>
        {isPending ? "submitting..." : "submit"}
      </button>

      {/* <SubmitButton /> */}
    </form>
  );
}

export default Form;

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
