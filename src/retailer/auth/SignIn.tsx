import { Link, useNavigate } from "react-router-dom"
import fruit1 from '../../assets/images/Healthy food online shopping.png'
import fruit2 from '../../assets/images/food delivery in a craft package from hand to hand.png'
import { FormEvent } from "react"

const RetailerSignIn = () => {
    const navigate = useNavigate()
    const handleLogin = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/retailer-screen/home")
    }
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="flex items-center justify-between">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
            </div>
            <div className="text-Gray">
                <h1>Login</h1>
                <h4 className="font-light">Reach customers in your vicinity </h4>

            </div>

            <form onSubmit={handleLogin} className="flex flex-col mt-5 gap-y-5">
         
                <div className="relative flex">
                    <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="email" className="input-label">Email Address</label>
                </div>
        
                <div className="relative flex">
                    <input id="password" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="password" className="input-label">Password</label>
                </div>
                <div className="w-full text-sm text-right">
                    <Link to="/forgotpwd" className="text-Gray" >Forgot Password?</Link>
                </div>
             

                <button className="border-0 rounded-md btn-outline bg-Yellow hover:bg-Yellow/90">
                    Log In
                </button>

                <div className="w-full text-center">Not registered? <Link to="/retailer-sign-up" className="text-Gray">Create an Account</Link></div>
                <div className="w-full mt-5 text-sm text-center">Are you a Shopper? <Link to="/sign-in" className="text-Gray">SWITCH TO SHOPPER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default RetailerSignIn