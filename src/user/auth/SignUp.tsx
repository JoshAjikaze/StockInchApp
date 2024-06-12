import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="text-Gray">
                <h1>Sign Up</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>
                <div className="mt-5">Have an Account Already? <Link className="text-Gray" to="/sign-in">Login Here</Link></div>
            </div>

            <form action="" className="flex flex-col gap-y-5 mt-5">
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Name</label>
                </div>
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">username</label>
                </div>
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Email Address</label>
                </div>
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Phone Number</label>
                </div>
                <div className="flex relative">
                    <textarea id="name" rows={5} placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Address</label>
                </div>
                <div className="flex relative">
                    <input id="name" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Password</label>
                </div>
                <div className="flex relative">
                    <input id="name" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Confirm Password</label>
                </div>

                <button className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
                    Create Account
                </button>

                <div className="w-full text-sm text-center">Are you a retailer? <Link to="#" className="text-Gray">SWITCH TO REATILER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default SignUp