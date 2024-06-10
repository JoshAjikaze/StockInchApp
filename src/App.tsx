import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/root"
import Layout from "./pages/Layout"
import SplashScreen from "./pages/SpslashScreen"
function App() {

  const router = createBrowserRouter([
    {
      path: "/splash",
      element: <SplashScreen />,
      errorElement: <></>
    },
    {
      path: "/",
      element: <Root />,
      errorElement: <></>,
      children: [
        {
          path: "home",
          element: <Layout />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
