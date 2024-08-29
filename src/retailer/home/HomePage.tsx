import { Link } from 'react-router-dom';
import inventory from '../../assets/icons/Todo List.png';
import warehouse from '../../assets/icons/Warehouse.png';
import { CategoriesData } from "../../user/home/UserHome";
import { useViewDashboardQuery } from '../../features/api';
import Loader from '@/components/loader/Loader';
const RetailerHomePage = () => {

    const { isFetching, isError, isSuccess, data } = useViewDashboardQuery("")

    console.log(isFetching, isError, isSuccess)
    
    if (isFetching) {
        return <Loader />
    }
    
    return (
        <div className="p-5">
            <div className="flex items-center mb-5 text-xl font-semibold gap-x-5 text-Gray">
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
                            <p className="text-xl font-light text-Gray">Items</p>
                            <p className="text-5xl font-bold text-Gray">{data?.total_items || 0}</p>
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
                            <p className="text-5xl font-bold text-Yellow">{data?.total_sales || 0} <span className='text-base text-Gray'>Last 30 Days</span> </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* my Inventory */}
            <p className="my-5 text-2xl font-semibold text-Gray">
                Inventory
            </p>
            <div className='min-h-[45vh] no-scrollbar bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg p-5 pb-10 mb-10'>
                {
                    CategoriesData.map((item, Idx) => (
                        <Link to={`/retailer-screen/products/${item.title.toLowerCase()}`} key={Idx} className="relative flex items-center text-black no-underline border gap-x-5">
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