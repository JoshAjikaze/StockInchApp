import { Link, useNavigate } from "react-router-dom";
import fruit1 from "../../assets/images/Healthy food online shopping.png";
import fruit2 from "../../assets/images/food delivery in a craft package from hand to hand.png";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useLoginMutation } from "../../features/api";
import Loader from "../../components/loader/Loader";

const SignIn = () => {

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const [trigger, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await trigger(data).unwrap();
      localStorage.setItem("token", JSON.stringify(response.access));
      setTimeout(() => {
        navigate("/userscreen/home");
        navigate(0)
      }, 500);    
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Fragment>
      {isLoading && <Loader />}
      <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
        <div className="flex items-center justify-between">
          <img src={fruit1} alt="" />
          <img src={fruit2} alt="" />
        </div>
        <div className="text-Gray">
          <h1>Login</h1>
          <h4 className="font-light">Find everyday items close to you!</h4>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col mt-5 gap-y-5">
          <div className="relative flex">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Name"
              className="w-full placeholder-transparent peer input-field"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
          </div>

          <div className="relative flex">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Name"
              className="w-full placeholder-transparent peer input-field"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>
          <div className="w-full text-sm text-right">
            <Link to="/forgotpwd" className="text-Gray">
              Forgot Password?
            </Link>
          </div>

          <button
            disabled={isLoading}
            className="border-0 rounded-md btn-outline bg-Yellow hover:bg-Yellow/90"
          >
            Log In
          </button>

          <div className="w-full text-center">
            Not registered?{" "}
            <Link to="/sign-up" className="text-Gray">
              Create an Account
            </Link>
          </div>
          <div className="w-full mt-5 text-sm text-center">
            Are you a retailer?{" "}
            <Link to="/retailer-sign-in" className="text-Gray">
              SWITCH TO REATILER ACCOUNT
            </Link>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default SignIn;
