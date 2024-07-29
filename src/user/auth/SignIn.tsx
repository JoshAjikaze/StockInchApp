import { Link, useNavigate } from "react-router-dom"
import fruit1 from '../../assets/images/Healthy food online shopping.png'
import fruit2 from '../../assets/images/food delivery in a craft package from hand to hand.png'
import { ChangeEvent, FormEvent, useState } from "react"
import { useLoginMutation } from "../../features/api"

const SignIn = () => {

    const [data, setdata] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setdata({ ...data, [e.target.id]: e.target.value })
    }

    const [trigger, { isLoading }] = useLoginMutation()

    const navigate = useNavigate()
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await trigger(data).unwrap()
            console.log(response)

            navigate("/userscreen/home")
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="flex justify-between items-center">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
            </div>
            <div className="text-Gray">
                <h1>Login</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>

            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-y-5 mt-5">

                <div className="flex relative">
                    <input id="email" name="email" type="email" placeholder="Name" className="w-full placeholder-transparent peer input-field" onChange={handleChange} />
                    <label htmlFor="email" className="input-label">Email</label>
                </div>

                <div className="flex relative">
                    <input id="password" name="password" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" onChange={handleChange} />
                    <label htmlFor="password" className="input-label">Password</label>
                </div>
                <div className="w-full text-sm text-right">
                    <Link to="/forgotpwd" className="text-Gray" >Forgot Password?</Link>
                </div>


                <button disabled={isLoading} className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
                    Log In
                </button>

                <div className="w-full text-center">Not registered? <Link to="/sign-up" className="text-Gray">Create an Account</Link></div>
                <div className="mt-5 w-full text-sm text-center">Are you a retailer? <Link to="/retailer-sign-in" className="text-Gray">SWITCH TO REATILER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default SignIn