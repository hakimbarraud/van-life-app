import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans";
import "./server";
import VansDetail, { loader as vanDetailLoader } from "./pages/VansDetail";
import NotFound from "./components/NotFound";
import HostLayout from "./components/HostLayout";
import Dashboard from "./host/Dashboard";
import Income from "./host/Income";
import MyVans, { loader as myVansLoader } from "./host/MyVans";
import Reviews from "./host/Reviews";
import MyVansDetails, {
  loader as myVansDetailsLoader,
} from "./host/MyVansDetails";
import VansInfos from "./host/VansInfos";
import VansPrice from "./host/VansPrice";
import VansPhotos from "./host/VansPhotos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "vans", element: <Vans />, loader: vansLoader },
        { path: "vans/:id", element: <VansDetail />, loader: vanDetailLoader },
        { path: "*", element: <NotFound /> },
        {
          path: "host",
          element: <HostLayout />,
          children: [
            { path: "", element: <Dashboard /> },
            { path: "income", element: <Income /> },
            { path: "myvans", element: <MyVans />, loader: myVansLoader },
            {
              path: "myvans/:id",
              element: <MyVansDetails />,
              loader: myVansDetailsLoader,
              children: [
                { path: "", element: <VansInfos /> },
                { path: "price", element: <VansPrice /> },
                { path: "photos", element: <VansPhotos /> },
              ],
            },
            { path: "reviews", element: <Reviews /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
