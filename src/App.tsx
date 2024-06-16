import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App as CapacitorApp } from '@capacitor/app';
import SplashScreen from "./pages/SpslashScreen"
import Userindex from "./user"
import SignUp from "./user/auth/SignUp"
import SignIn from "./user/auth/SignIn"
import HomePage from "./user/home/HomePage";
import Categories from "./user/products/Categories";
import ForgotPwd from "./user/auth/ForgotPwd";
import UserHome from "./user/home/UserHome";
import Profile from "./user/profile/Profile";
import ProductPage from "./user/products/ProductPage";


function App() {

  CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
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
      path: "/userscreen",
      element: <HomePage />,
      errorElement: <>Hello</>,
      children: [
        {
          path: "/userscreen/home",
          element: <UserHome />,
        },
        {
          path: "/userscreen/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/categories/:id",
      element: <Categories />
    },
    {
      path: "/product/:id",
      element: <ProductPage />
    },


  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
