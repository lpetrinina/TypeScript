import React, { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target);

    const text = formData.get("text") as string;
    const person: Person = { name: text };

    // const data = Object.fromEntries(formData);
    // const person: Person = { name: data.text as string };
  };

  return (
    <section>
      <h2>Events</h2>

      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='text'
          className=' form-input mb-1'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='email'
          name='email'
          className=' form-input mb-1'
          value={email}
          onChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}

export default Component;
