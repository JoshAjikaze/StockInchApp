import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App as CapacitorApp } from '@capacitor/app';
import SplashScreen from "./pages/SpslashScreen"
import Userindex from "./user"
import SignUp from "./user/auth/SignUp"
import SignIn from "./user/auth/SignIn"
import HomePage from "./user/home/HomePage";
import Categories from "./user/products/Categories";
import ForgotPwd from "./user/auth/ForgotPwd";
function App() {

  CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  const router = createBrowserRouter([
    {
      path: "*",
      element: <div>Not found</div>
    },
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
    },
    {
      path: "/forgotpwd",
      element: <ForgotPwd />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/categories",
      element: <Categories />
    },
    // {
    //   path: "/categories/:id",
    //   element: <Categories />
    // },
    

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
