import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import useAppStore from "./stores/app";
import Wrapper from "./layout/Wrapper";
import Home from "./pages/Home";
import Preview from "./pages/Preview";

export default function App() {
  const [initialized, setInitialized] = useState(false);
  const app = useAppStore();

  useEffect(() => {
    if (!initialized) {
      async function initializeApp() {
        await app.init();
        setInitialized(true);
      }
      initializeApp();
    }
  }, [app.init, initialized]);

  if (!initialized) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[80px] font-bebas">Loading ...</h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Route>
    </Routes>
  );
}
