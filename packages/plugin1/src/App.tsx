import React, { Suspense } from "react";

// @ts-ignore
const ShellApp = React.lazy(() => import("shell/ShellApp"));

function App() {
  return (
    <Suspense fallback="loading">
      <ShellApp />
    </Suspense>
  );
}

export default App;
