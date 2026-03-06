import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  { id: 1, url: "some url", text: "some text" },
  { id: 2, url: "some url", text: "some text" },
  { id: 3, url: "some url", text: "some text" },
];

function Component() {
  const [test, setText] = useState("some text"); //ts infer the type
  const [list, setList] = useState<string[]>([]); // in this  case we need  to explicitly set the generic type
  const [links, setLinks] = useState<Link[]>(navLinks);

  console.log(links);

  return (
    <div>
      <h2>State</h2>

      <button
        className='btn btn-center'
        onClick={() => {
          setText("typescript");
          setLinks((links) => [
            ...links,
            { id: 4, url: "some url", text: "some" },
          ]);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Component;
