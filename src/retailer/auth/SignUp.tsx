import { Link } from "react-router-dom"

const RetailerSignUp = () => {
    return (
        <main className="flex flex-col gap-y-5 px-5 py-[2.5vh] min-h-[90vh]">
            <div className="text-Gray">
                <h1>Sign Up</h1>
                <h4 className="font-light">Find everyday items close to you!</h4>
                <div className="mt-5">Have an Account Already? <Link className="text-Gray" to="/retailer-sign-in">Login Here</Link></div>
            </div>

            <form action="" className="flex flex-col mt-5 gap-y-5">
                <div className="relative flex">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Store Name</label>
                </div>
                <div className="relative flex">
                    <input id="username" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="username" className="input-label">Branch</label>
                </div>
                <div className="relative flex">
                    <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="email" className="input-label">Email</label>
                </div>
                <div className="relative flex">
                    <input id="phone" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="phone" className="input-label">Phone Number</label>
                </div>
                <div className="relative flex">
                    <textarea id="address" rows={5} placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="address" className="input-label">Address</label>
                </div>
                
                <div className="relative flex">
                    <input id="password" type="file" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="password" className="input-label">Profile Picture</label>
                </div>
                <div className="relative flex">
                    <input id="password" type="file" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="password" className="input-label">Document</label>
                </div>

                <div className="relative flex">
                    <input id="password" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="password" className="input-label">Password</label>
                </div>

                <div className="relative flex">
                    <input id="confirmPassword" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                </div>

                <button className="border-0 rounded-md btn-outline bg-Yellow hover:bg-Yellow/90">
                    Create Account
                </button>

                <div className="w-full text-sm text-center">Are you a Shopper? <Link to="/sign-up" className="text-Gray">SWITCH TO SHOPPER ACCOUNT</Link></div>

            </form>
        </main>
    )
}

export default RetailerSignUp