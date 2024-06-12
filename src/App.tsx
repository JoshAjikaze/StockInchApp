import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SplashScreen from "./pages/SpslashScreen"
import Userindex from "./user"
import SignUp from "./user/auth/SignUp"
import SignIn from "./user/auth/SignIn"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
      errorElement: <></>
    },
    {
      path: "/user",
      element: <Userindex />,
      errorElement: <></>
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    }

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
