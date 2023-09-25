import * as React from "react";
import { CountButton } from "./CountButton";

export default function Plugin2() {
  return (
    <div style={{ backgroundColor: "pink", padding: 20, borderRadius: 10 }}>
      Plugin2:
      <CountButton />
      React: {React.version}
    </div>
  );
}
