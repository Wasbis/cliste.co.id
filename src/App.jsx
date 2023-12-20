import { useState } from "react";
import RouterApp from "../src/routes/RouterApp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <RouterApp />;
}

export default App;
