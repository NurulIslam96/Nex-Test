import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
