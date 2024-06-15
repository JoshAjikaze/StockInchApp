import { categoryToggle } from "../../features/slices/togglerSlices"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../features/store"

const SearchFilter = () => {

  const { isCategoryToggled } = useSelector((state:RootState) => state.modalToggler)
  const dispatch = useDispatch()

  const categoriesData = [
    {
      name: "Groceries",
      id: "1"
    },
    {
      name: "Toiletries",
      id: "2"
    },
    {
      name: "Medication",
      id: "3"
    },
    {
      name: "Liquor",
      id: "4"
    },
    {
      name: "Soft Drinks",
      id: "5"
    },
    {
      name: "Snacks",
      id: "6"
    },
    {
      name: "Beauty",
      id: "7"
    },
    {
      name: "Kids",
      id: "8"
    },
    {
      name: "Pets",
      id: "9"
    },
    {
      name: "Sports & Outdoors",
      id: "10"
    },
    {
      name: "Office & School",
      id: "11"
    },
  ]



  return (
    <div className={` ${ isCategoryToggled ? "bottom-0" : "-bottom-full"} fixed left-0 z-40 w-[90%] h-2/3 px-[5%] py-5 bg-white backdrop-blur-md shadow-[0px_-3px_3px_0px_rgba(0,0,0,0.12)] rounded-xl space-y-5 flex flex-col justify-between transition-all duration-300`}>

      <div className="flex items-center justify-between mb-5">
        <button onClick={() => dispatch(categoryToggle())} className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <button className="default-btn">
          Reset All
        </button>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="font-medium">Categories</p>

        <div className="flex flex-wrap items-center justify-evenly gap-2">
          {
            categoriesData.map((item) => (
              <button className="p-1 px-2 text-sm border border-solid border-Gray/50 rounded-full default-btn" key={item.id}>{item.name}</button>
            ))
          }
        </div>

      </div>

      <div className="flex flex-col gap-y-2">
        <p className="font-medium">Price Range</p>
        
        <div className="w-full flex items-center justify-start gap-x-10">
          <input type="text" className="outline-Yellow w-1/3 h-7 rounded-lg border border-solid border-transparent bg-LightGray" />
          <input type="text" className="outline-Yellow w-1/3 h-7 rounded-lg border border-solid border-transparent bg-LightGray" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="font-medium">Distance to stores</p>
        <div className="w-full">
          <input type="range" name="" id="" className="w-full bg-Yellow" />
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="font-medium">Sort By price</p>
      </div>

      <div className="flex items-center justify-center w-full">
        <button className="w-4/5 default-btn bg-Yellow text-white p-3 rounded-lg">Apply Filter</button>
      </div>

    </div>
  )
}

export default SearchFilter