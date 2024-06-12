import { Link } from "react-router-dom"
import fruit1 from '../../assets/images/Healthy food online shopping.png'
import fruit2 from '../../assets/images/food delivery in a craft package from hand to hand.png'

const SignIn = () => {
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="flex justify-between items-center">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
            </div>
            <div className="text-Gray">
                <h1>Login</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>

                <div className="mt-5">Have an Account Already? <Link className="text-Gray" to="/sign-in">Login Here</Link></div>
            </div>

            <form action="" className="flex flex-col gap-y-5 mt-5">
         
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Email Address</label>
                </div>
        
                <div className="flex relative">
                    <input id="name" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Password</label>
                </div>
                <div className="w-full text-sm text-right underline">
                    <span>Forgot Password?</span>
                </div>
             

                <button className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
                    Log In
                </button>

                <div className="w-full text-center">Not registered?<Link to="#" className="text-Gray">Create an Account</Link></div>
                <div className="mt-5 w-full text-sm text-center">Are you a retailer? <Link to="#" className="text-Gray">SWITCH TO REATILER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default SignIn