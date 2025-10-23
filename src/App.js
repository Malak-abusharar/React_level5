import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/home/Home.jsx";
import Create from "./pages/Cart/Cart.jsx";
import NotFound from "NotFound.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);

function App() {

  return(
    
     <RouterProvider router={router} />
  );
}

export default App;