import { Link } from 'react-router-dom';
import inventory from '../../assets/icons/Todo List.png';
import warehouse from '../../assets/icons/Warehouse.png';
import { CategoriesData } from "../../user/home/UserHome";

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
            <section className="flex gap-x-5 justify-between items-center">
                <div className="basis-1/2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-3 h-[150px] flex flex-col justify-between linear-pattern-2">
                    <div className="flex justify-end">
                        <img src={warehouse} alt="" className='size-10' />
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-light text-Gray">Items</p>
                            <p className="text-5xl font-bold text-Gray">355</p>
                        </div>
                    </div>
                </div>

                <div className="basis-1/2 bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-3 h-[150px] flex flex-col justify-between">
                    <div className="flex justify-end">
                        <img src={inventory} alt="" className='size-10' />
                     </div>
                    <div>
                        <div>
                            <p className="text-xl font-light text-Gray">Added to list</p>
                            <p className="text-5xl font-bold text-Yellow">106 <span className='text-base text-Gray'>Last 30 Days</span> </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* my Inventory */}
            <p className="my-5 text-2xl font-semibold text-Gray">
                Inventory
            </p>
            <div className='h-[50vh] overflow-y-scroll no-scrollbar bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-5'>
            {
                    CategoriesData.map((item, Idx) => (
                        <Link to={`/categories/${item.title.toLowerCase()}`} onClick={() => {}} key={Idx} className="flex relative gap-x-5 items-center text-black no-underline border">
                            <p>
                                <img src={item.image || "https://placehold.co/30x30"} alt="" className="size-12" />
                            </p>
                            
                            <p className="text-base font-medium">{item.title}</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute right-0 size-5">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                        </Link>
                    ))
                }
            </div>

            <div></div>

        </div>
    )
}

export default RetailerHomePage