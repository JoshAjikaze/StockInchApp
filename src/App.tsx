import { createHashRouter, RouterProvider } from "react-router-dom"
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
import ChangePWD from "./user/profile/ChangePWD";
import ChangeAddress from "./user/profile/ChangeAddress";
import Retailerindex from "./retailer";
import RetailerSignUp from "./retailer/auth/SignUp";
import RetailerSignIn from "./retailer/auth/SignIn";
import RetailerHome from "./retailer/home/RetailerHome";
import RetailerHomePage from "./retailer/home/HomePage";
import EditItem from "./retailer/products/EditItem";
import Products from "./retailer/products/Products";


function App() {

  CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });

  const router = createHashRouter([
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
      errorElement: <>An Error Has Occured</>,
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
    {
      path: "/changepwd",
      element: <ChangePWD />
    },
    {
      path: "/changeaddress",
      element: <ChangeAddress />
    },


    // Retailers Routes

    {
      path: "/retailer",
      element: <Retailerindex />,
    },
    {
      path: "/retailer-sign-up",
      element: <RetailerSignUp />,
    },
    {
      path: "/retailer-sign-in",
      element: <RetailerSignIn />,
    },
    {
      path: "/retailer-screen",
      element: <RetailerHome />,
      children: [
        {
          path: "/retailer-screen/home", 
          element: <RetailerHomePage />
        },
        {
          path: "/retailer-screen/profile", 
          element: <>Profile</>
        },
        {
          path: "/retailer-screen/products/:id", 
          element: <Products />
        },
        {
          path: "/retailer-screen/editproduct/:id", 
          element: <EditItem />
        },
      ]
    },

  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
