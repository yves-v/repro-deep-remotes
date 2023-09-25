import React, { Suspense } from "react";

// @ts-ignore
const Plugin1App = React.lazy(() => import("plugin1/Plugin1App"));

export default function ShellApp() {
  return (
    <Suspense fallback="loading">
      <Plugin1App />
    </Suspense>
  );
}
