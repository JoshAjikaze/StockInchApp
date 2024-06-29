import { Link } from "react-router-dom"

const RetailerSignUp = () => {
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="text-Gray">
                <h1>Sign Up</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>
                <div className="mt-5">Have an Account Already? <Link className="text-Gray" to="/retailer-sign-in">Login Here</Link></div>
            </div>

            <form action="" className="flex flex-col gap-y-5 mt-5">
                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Store Name</label>
                </div>
                <div className="flex relative">
                    <input id="username" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="username" className="input-label">Branch</label>
                </div>
                <div className="flex relative">
                    <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="email" className="input-label">Email</label>
                </div>
                <div className="flex relative">
                    <input id="phone" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="phone" className="input-label">Phone Number</label>
                </div>
                <div className="flex relative">
                    <textarea id="address" rows={5} placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="address" className="input-label">Address</label>
                </div>

                <div className="flex relative p-3.5 rounded-lg border border-solid border-slate-700/50">
                    <label htmlFor="profilePic" className="">
                        <input id="profilePic" type="file" placeholder="Name" className="hidden" />
                        <span className="text-sm font-semibold text-Gray/70">Upload a Profile Picture</span>
                    </label>
                </div>
                
                <div className="flex relative p-3.5 rounded-lg border border-solid border-slate-700/50">
                    <label htmlFor="document" className="">
                        <input id="document" type="file" placeholder="Name" className="hidden" />
                        <span className="text-sm font-semibold text-Gray/70">Upload document</span>
                    </label>
                </div>
         
                <div className="flex relative">
                    <input id="password" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="password" className="input-label">Password</label>
                </div>

                <div className="flex relative">
                    <input id="confirmPassword" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                </div>

                <button className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
                    Create Account
                </button>

                <div className="w-full text-sm text-center">Are you a Shopper? <Link to="/sign-up" className="text-Gray">SWITCH TO SHOPPER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default RetailerSignUp