import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../../features/api"
import { TRegisterRequest } from "../../utils/types"
import Loader from "../../components/loader/Loader";
import fruit1 from "../../assets/images/Healthy food online shopping.png";
import fruit2 from "../../assets/images/food delivery in a craft package from hand to hand.png";
import { toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState<TRegisterRequest>({
        email: "",
        password: "",
        name: "",
        address: "address",
        role: "shopper"
    })

    const [showPassword, setShowPassword] = useState(false)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setdata({ ...data, [e.target.id]: e.target.value })
    }

    const [trigger, { isLoading, isSuccess, error }] = useRegisterMutation()

    const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await trigger(data).unwrap()
            
        } catch (error:any) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (isSuccess) {
          toast.success("User Created 👍")
          navigate("/sign-in", {
            state: {
              email: data.email,
              password: data.password
            }
          });
        }

        if(error){
            // @ts-ignore
            toast.error(error?.data.email[0] || 'An error occured');
            // toast.error('An error occured');
        }
      }, [isSuccess, error])

    return (<Fragment>
        {isLoading && <Loader />}
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="flex items-center justify-between">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
            </div>
            <div className="text-Gray">
                <h1>Sign Up</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>
                <div className="mt-5">Have an Account Already? <Link className="text-Gray" to="/sign-in">Login Here</Link></div>
            </div>

            <form onSubmit={handleSignUp} action="" className="flex flex-col mt-5 gap-y-5">
                <div className="relative flex">
                    <input id="name" name="name" onChange={handleChange} type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" required />
                    <label htmlFor="name" className="input-label">Enter Full Name</label>
                </div>
                {/* <div className="relative flex">
                    <input id="username" name="username" onChange={handleChange} type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="username" className="input-label">username</label>
                </div> */}
                <div className="relative flex">
                    <input id="email" name="email" onChange={handleChange} type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" required />
                    <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                <div className="relative flex">
                    <input id="phone" name="phone" onChange={handleChange} type="number" inputMode="numeric" placeholder="Name" className="w-full placeholder-transparent peer input-field" required />
                    <label htmlFor="phone" className="input-label">Phone Number</label>
                </div>
                {/* <div className="relative flex">
                    <textarea id="address" name="address" onChange={handleChange} rows={5} placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="address" className="input-label">Address</label>
                </div> */}
                <div className="relative flex">
                    <input id="password" name="password" onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="Name" className="w-full placeholder-transparent peer input-field" required />
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
                    <label htmlFor="password" className="input-label">Password</label>
                </div>
                {/* <div className="relative flex">
                    <input id="confirmPassword" name="confirmPassword" onChange={handleChange} type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                </div> */}

                <button disabled={isLoading} className="border-0 rounded-md btn-outline bg-Yellow hover:bg-Yellow/90">
                    Create Account
                </button>

                <div className="w-full text-sm text-center">Are you a retailer? <Link to="/retailer-sign-up" className="text-Gray">SWITCH TO RETAILER ACCOUNT</Link></div>

            </form>

        </main>
    </Fragment>
    )
}

export default SignUp