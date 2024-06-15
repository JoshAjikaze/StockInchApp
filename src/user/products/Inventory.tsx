import { useSelector, useDispatch  } from "react-redux";
import { RootState } from "../../features/store";
import { inventoryToggle } from "../../features/slices/togglerSlices";


const Inventory = () => {
    const dispatch = useDispatch()
    const { isInventoryToggled } = useSelector((state:RootState) => state.modalToggler)

  return (
    <div className={`${isInventoryToggled ? "bottom-0":"-bottom-full"} fixed left-0 h-screen w-full bg-black z-40`}>Inventory</div>
  )
}

export default Inventory