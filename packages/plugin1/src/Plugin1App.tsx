import React, { PropsWithChildren } from "react";

// @ts-ignore
import Plugin2 from "plugin2/Plugin2";
import { CountButton } from "./CountButton";

export default function Plugin1App() {
  return (
    <Plugin1>
      <Plugin2 />
    </Plugin1>
  );
}

function Plugin1({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      style={{ backgroundColor: "lightgreen", padding: 20, borderRadius: 10 }}
    >
      Plugin1:
      <CountButton />
      React: {React.version}
      {children}
    </div>
  );
}
