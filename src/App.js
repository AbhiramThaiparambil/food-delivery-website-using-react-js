import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import About from "./components/About";
import Error from "./components/ErrorC";
import MenuItem from "./components/MenuItem";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

const Contact = () => <h1>hello iam contact</h1>;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {path: "/restaurant/:id",
        element:<MenuItem></MenuItem>
        
      }
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
