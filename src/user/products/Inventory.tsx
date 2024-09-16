import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { inventoryToggle, modalToggle } from "../../features/slices/togglerSlices";
import InventoryItemComponent from "../../components/InventoryItemComponent";
import { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import { useViewCartQuery } from "@/features/api";
import LoadingComponent from "@/components/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent";

const Inventory = () => {
  const dispatch = useDispatch()
  const { isInventoryToggled } = useSelector((state: RootState) => state.modalToggler)
  const [togglex, setTogglex] = useState(false)

  const { isFetching, isError, isSuccess, data } = useViewCartQuery("")

  return (
    <>
      <div className={`${isInventoryToggled ? "bottom-0" : "-bottom-full"} fixed left-0 h-screen w-full bg-Yellow z-40 transition-all duration-300`}>


        <div className="flex items-center justify-between p-4">
          <button onClick={() => dispatch(inventoryToggle())} className="default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <p className="text-lg font-semibold">Shopping List</p>

          <button onClick={() => setTogglex(true)} className="default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </div>


        <div className={` ${isInventoryToggled ? "bottom-0" : "-bottom-full"} bg-white fixed left-0 h-4/5 rounded-t-2xl w-[95%] px-[2.5%] py-5 transition-all duration-300 delay-75`}>

          <div className="flex items-center justify-between font-medium">
            <p>Items <span className="font-semibold">({data?.length || 0})</span></p>
            <p className="invisible">Total: N<span>15,000</span></p>
          </div>
          {
            isSuccess && (
              <div className="space-y-3 overflow-y-scroll h-[84%] p-2 mt-5 no-scrollbar">
                {
                  data.map((item:any) => (
                    <InventoryItemComponent key={item.id} product={{
                      id: item.inventory_item.id,
                      title: item.inventory_item.name,
                      shop: item.inventory_item.location,
                      location: item.inventory_item.location,
                      price: item.inventory_item.price,
                      image: item.inventory_item.image_url
                    }} />
                  ))
                }

              </div>
            )
          }
        </div>


        <LoadingComponent isFetching={isFetching} />
        <ErrorComponent isError={isError} className="mt-20" message="Cart Items not found" />

      </div>


      <div className={` ${togglex ? "bottom-0" : "-bottom-full"} fixed left-0 w-full h-screen z-[100] bg-black/90 transition-all duration-300`}>

        <div className={` ${togglex ? "bottom-0" : "-bottom-full"} w-full h-1/3 fixed left-0 bg-white rounded-t-lg transition-all duration-300 delay-75`}>

          <div className="flex items-center justify-between p-4">
            <button onClick={() => setTogglex(false)} className="default-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>


            <button onClick={() => dispatch(modalToggle())} className="text-base font-medium default-btn">
              Reset All
            </button>

          </div>

          <div className="flex flex-col px-4 gap-y-2">
            <p className="flex items-center space-x-10 text-lg"><p>Sort by Price</p> <CheckBox /> </p>
            <p className="flex items-center space-x-10 text-lg"><p>Sort by Distance</p> <CheckBox /></p>
            <div className="flex items-center justify-center w-full mt-10">
              <button className="p-5 text-base yellow-btn">Apply Filter</button>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Inventory