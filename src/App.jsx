import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Collection from "./Collection";
import Shop from "./Shop";
import Playground from "./Playground";

//setting up the routes
const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collect" element={<Collection />} />
      <Route path="/playground" element={<Playground />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
