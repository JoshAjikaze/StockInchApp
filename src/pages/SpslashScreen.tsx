import logo from "../assets/icons/Logo.svg";
import image from "../assets/images/focused-young-man-paying-bill-store.png";
import { Link } from 'react-router-dom';
const SplashScreen = () => {
    return (
        <main>
            <div className="absolute z-0 w-full h-full">
                <img src={image} alt="" className="w-full" />
            </div>

            <div className='flex relative flex-col justify-between items-center px-10 h-screen linear'>
                <div className="flex justify-end items-center mt-10 w-full">
                    <img src={logo} alt="" className="size-32" />
                </div>

                <div className="mt-10 space-y-2 text-center">
                    <h2 className="text-white">Shop Smarter, Together.</h2>
                    <h6 className="tracking-wide leading-relaxed text-Yellow">StockInch app is bridging the gap between local retailers and savvy shoppers.</h6>
                </div>

                <div className="flex flex-col gap-y-3 items-center mb-10 w-full">
                    <Link to="/user" className="w-full text-white no-underline">
                        <button className="w-full btn-outline">
                            I'm a shopper
                        </button>
                    </Link>
                    <Link to="#" className="w-full text-white no-underline">
                        <button className="w-full btn-outline">
                            I'm a retailer
                        </button>
                    </Link>
                </div>
            </div>

        </main>
    )
}

export default SplashScreen