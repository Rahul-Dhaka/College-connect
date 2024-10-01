import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import UI from "./Components/UI/UI.tsx";
import HomePage from "./Pages/HomePage.tsx";
import Test from "./Components/Test.tsx";
import Weather from "./Pages/Weather.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path="/components" element={<UI />} />
      <Route path="/test" element={<Test />} />
      <Route path="/weather" element={<Weather />} />

    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
