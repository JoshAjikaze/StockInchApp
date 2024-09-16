// import { Link } from 'react-router-dom';
import { useGetUserProfile } from '@/utils/useGetUserProfile';
import inventory from '../../assets/icons/Todo List.png';
import warehouse from '../../assets/icons/Warehouse.png';
// import { CategoriesData } from "../../user/home/UserHome";
import { useViewDashboardQuery, useListInventoryQuery } from '../../features/api';
import Loader from '@/components/loader/Loader';
import ProductComponent from '@/retailer/products/ProductComponent';
const RetailerHomePage = () => {

    const { userProfile } = useGetUserProfile()
    const { isFetching, data } = useViewDashboardQuery("")
    const { isFetching: inventoryFetching, isSuccess: InventorySuccess, data: InventoryData } = useListInventoryQuery("")

    if (isFetching) {
        return <Loader />
    }

    return (
        <div className="">
            <div className="flex items-center mb-5 text-xl font-semibold gap-x-5 text-Gray z-[100] bg-white p-5">
                <img
                    src={userProfile?.profile_picture || "https://placehold.co/100x100"}
                    alt="image"
                    className="rounded-full size-12"
                />
                <p>
                    {userProfile?.name || "Welcome Guest"} <span>👋</span>
                </p>
            </div>

            {/* Inventory Items */}
            <section className="sticky flex items-center justify-between p-5 gap-x-5 top-0 z-[99] bg-white">
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
                            <p className="text-xl font-light text-Gray">Inventory Value</p>
                            <p className="text-4xl font-bold text-Yellow"> <span className='text-3xl'>N </span> {data?.total_inventory_value || 0}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* my Inventory */}
            <p className="p-5 my-5 text-2xl font-semibold text-Gray">
                Inventory
            </p>
            <div className='min-h-[45vh] no-scrollbar bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] rounded-lg pb-16 mb-10 space-y-3 p-5'>
                {
                    inventoryFetching && <>Loading...</>
                }

                {
                    InventorySuccess && (
                        <>
                            {
                                InventoryData?.map((item: any) => (
                                    <ProductComponent
                                        key={item.id}
                                        product={{
                                            id: item.id,
                                            image: item.image_url,
                                            price: item.price,
                                            title: item.name,
                                            numberInInventory: 0,
                                            amountSold: 0
                                        }}
                                    />
                                ))
                            }
                        </>
                    )
                }

                {
                    InventorySuccess && (
                        <>
                            {
                                InventoryData?.length < 1 && <h1 className='text-xl font-light text-center'>No Items In Inventory</h1>
                            }
                        </>
                    )
                }

            </div>

        </div>
    )
}

export default RetailerHomePage

// <Link to={`/retailer-screen/products/${item.id}`} key={Idx} className="relative flex items-center text-black no-underline border gap-x-5">

//     <p>
//         <img src={item.image_url || "https://placehold.co/30x30"} alt="" className="size-12" />
//     </p>

//     <p className="text-base font-medium">{item.name}</p>

//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute right-0 size-5">
//         <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
//     </svg>

// </Link>
