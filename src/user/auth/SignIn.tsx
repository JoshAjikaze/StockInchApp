import { Link, useLocation, useNavigate } from "react-router-dom";
import fruit1 from "../../assets/images/Healthy food online shopping.png";
import fruit2 from "../../assets/images/food delivery in a craft package from hand to hand.png";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useLoginMutation } from "../../features/api";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";

const SignIn = () => {

  const { state } = useLocation()

  const [data, setdata] = useState({
    email: state?.email,
    password: state?.password,
  });

  const [showPassword, setShowPassword] = useState(false)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const [trigger, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await trigger(data).unwrap();
      // if(error){
      //   toast.error(response.error)
      // }
      localStorage.setItem("token", JSON.stringify(response.access));
      setTimeout(() => {
        navigate("/userscreen/home");
        navigate(0)
      }, 500);
    } catch (error: any) {
      toast.error(error);
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
              defaultValue={data?.email}
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
              type={showPassword ? "text" : "password"}
              placeholder="Name"
              className="w-full placeholder-transparent peer input-field"
              onChange={handleChange}
              defaultValue={data?.password}
              required
            />

            <button className="absolute bg-transparent border-0 right-3 top-3" onClick={() => setShowPassword(!showPassword)} type="button">
              {
                showPassword ?
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  </>
                  :
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </>
              }
            </button>

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
