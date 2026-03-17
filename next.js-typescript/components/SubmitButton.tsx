"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={btnStyle} type='submit' disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
}

export default SubmitButton;

const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
