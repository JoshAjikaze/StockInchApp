import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/store";
import { inventoryToggle } from "../../features/slices/togglerSlices";
// import trash from '../../assets/icons/'


const Inventory = () => {
  const dispatch = useDispatch()
  const { isInventoryToggled } = useSelector((state: RootState) => state.modalToggler)

  return (
    <div className={`${isInventoryToggled ? "bottom-0" : "-bottom-full"} fixed left-0 h-screen w-full bg-Yellow z-40`}>


      <div className="flex justify-between items-center p-4">
        <button onClick={() => dispatch(inventoryToggle())} className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <p>Shopping List</p>

        <button className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </button>
      </div>
      <div className={` ${isInventoryToggled ? "bottom-0" : "-bottom-full"} bg-white fixed left-0 h-4/5 rounded-t-2xl w-[95%] px-[5%] py-5`}>
        <div className="flex items-center justify-between">
          <p>Items <span>(5)</span></p>
          <p>Total: N<span>15,000</span></p>
        </div>

        <div className="space-y-3 pt-5">
          <section className="flex items-center justify-between text-sm p-2 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.3)] rounded-lg">
            {/* Left side */}
            <div className="space-y-3">
              <div className="flex items-center gap-x-5">
                <img src="https://placehold.co/100x100" alt="" className="size-12 rounded-lg" />
                <div>
                  <p className="text-base font-semibold">Raid Insecticide</p>
                  <p><span>Shoprite ICM</span></p>
                </div>
              </div>
              <div>
                <p className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Obafemi Awolowo Way, Alausa, Ojodu </span></p>
              </div>
            </div>

            {/* Right Side */}
            <div>Right Side</div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Inventory