import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { inventoryToggle } from "../../features/slices/togglerSlices";
import InventoryItemComponent from "../../components/InventoryItemComponent";


const Inventory = () => {
  const dispatch = useDispatch()
  const { isInventoryToggled } = useSelector((state: RootState) => state.modalToggler)

  return (
    <div className={`${isInventoryToggled ? "bottom-0" : "-bottom-full"} fixed left-0 h-screen w-full bg-Yellow z-40 transition-all duration-300`}>


      <div className="flex items-center justify-between p-4">
        <button onClick={() => dispatch(inventoryToggle())} className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="text-lg font-semibold">Shopping List</p>

        <button className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </button>
      </div>
      <div className={` ${isInventoryToggled ? "bottom-0" : "-bottom-full"} bg-white fixed left-0 h-4/5 rounded-t-2xl w-[95%] px-[2.5%] py-5 transition-all duration-300 delay-75`}>
      
        <div className="flex items-center justify-between font-medium">
          <p>Items <span className="font-semibold">(5)</span></p>
          <p>Total: N<span>15,000</span></p>
        </div>

        <div className="space-y-3 overflow-y-scroll h-[84%] p-2 mt-5 no-scrollbar">
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
          <InventoryItemComponent product={{
            title: "Raid Insecticide",
            shop: "Shoprite ICM",
            location: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 1500,
            image: ""
          }} />
        </div>
      </div>
    </div>
  )
}

export default Inventory