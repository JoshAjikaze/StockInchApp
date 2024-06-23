import inventory from '../../assets/icons/Todo List.png';
import warehouse from '../../assets/icons/Warehouse.png';

const RetailerHomePage = () => {
    return (
        <div className="p-5">

            <div className="flex gap-x-5 items-center mb-5 text-xl font-semibold text-Gray">
                <img
                    src="https://placehold.co/100x100"
                    alt="image"
                    className="rounded-full size-12"
                />
                <p>
                    Welcome ! <span>👋</span>
                </p>
            </div>

            {/* Inventory Items */}
            <section className="flex items-center justify-between gap-x-5">
                <div className="basis-1/2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-3 h-[150px] flex flex-col justify-between linear-pattern-2">
                    <div className="flex justify-end">
                        <img src={warehouse} alt="" className='size-10' />
                    </div>
                    <div>
                        <div>
                            <p className="text-Gray text-xl font-light">Items</p>
                            <p className="text-Gray text-5xl font-bold">355</p>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2 bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-3 h-[150px] flex flex-col justify-between">
                    <div className="flex justify-end">
                        <img src={inventory} alt="" className='size-10' />
                     </div>
                    <div>
                        <div>
                            <p className="text-Gray text-xl font-light">Added to list</p>
                            <p className="text-Yellow text-5xl font-bold">106 <span className='text-base text-Gray'>Last 30 Days</span> </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* my Inventory */}
            <p className="my-5 text-2xl font-semibold text-Gray">
                Inventory
            </p>
            <div className='min-h-[50vh] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg'>

            </div>

            <div></div>

        </div>
    )
}

export default RetailerHomePage