
const SplashScreen = () => {
    return (
        <div className='flex relative flex-col justify-between items-center px-10 h-screen linear'>
            <div className="mt-10">top</div>

            <div className="mt-10 space-y-2 text-center">
                <h2 className="text-white">Shop Smarter, Together.</h2>
                <h6 className="tracking-wide leading-relaxed text-Yellow">StockInch app is bridging the gap between local retailers and savvy shoppers.</h6>
            </div>

            <div className="flex flex-col gap-y-3 items-center mb-10 w-full">
                <button className="w-full btn-outline">I'm a shopper</button>
                <button className="w-full btn-outline">I'm a retailer</button>
            </div>

        </div>
    )
}

export default SplashScreen