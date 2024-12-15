import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mx-auto align-items-center width-[1450px]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
