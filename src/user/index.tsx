import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo.svg'

const Userindex = () => {
    return (
        <main>
            <div className="absolute z-0 w-full h-full bg-no-repeat bg-cover bg-user-screen"></div>

            <div className='flex relative flex-col justify-between items-center px-10 h-screen linear'>
                <div className="flex justify-end items-center mt-10 w-full">
                    <img src={logo} alt="" className="size-32" />
                </div>

                <div className="mt-10 space-y-2 text-center">
                    <h2 className="leading-snug text-white">Find Everyday Items in Stores Close to you.</h2>
                    <h6 className="tracking-wide leading-relaxed text-Yellow"> Introducing Stockinch, your one-stop app for a more streamlined shopping experience.</h6>
                </div>

                <div className="flex flex-col gap-y-3 items-center mb-10 w-full">
                    <Link to="/sign-up" className="w-full text-white no-underline">
                        <button className="w-full border-0 btn-outline bg-Yellow">
                            Next
                        </button>
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default Userindex