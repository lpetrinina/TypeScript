import type { PropsWithChildren } from "react";

//* Props & Children prop

// ? First approach - set children as an optional prop
// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

// ? Second approach - use the special type PropsWithChildren
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Props</h2>

      <p>Name: {name}</p>
      <p>ID: {id}</p>
      {children}
    </div>
  );
}

export default Component;
