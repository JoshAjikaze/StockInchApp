// import { NavLink } from "react-router-dom";
import Allcategories from "../products/Allcategories";
import { NavLink, Outlet } from "react-router-dom";
import homeicon from '../../assets/icons/Home.png';
import homeicon2 from '../../assets/icons/Home(1).png';
import customer from '../../assets/icons/Customer.png';
import customer2 from '../../assets/icons/Customer(1).png';
import inventory from '../../assets/icons/inventory.png';
import SearchFilter from "../products/SearchFilter";
import { useDispatch } from "react-redux";
import { inventoryToggle } from "../../features/slices/togglerSlices";
import Inventory from "../products/Inventory";
import SearchPage from "../../components/Search/SearchPage";

const HomePage = () => {
    const dispatch = useDispatch()

    return (
        <main className="flex flex-col px-5 min-h-[95vh] space-y-5">
            
            <Allcategories />
            <SearchFilter />
            <Inventory />
            <SearchPage />

            <div className="pb-[10vh]">
                <Outlet />
            </div>

            <div className="flex justify-center gap-x-20 h-[7vh] fixed w-[90%] px-[5%] pt-3 bottom-0 bg-white left-0 z-50">

                <button className="default-btn">
                    <NavLink
                        to="/userscreen/home"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        {
                            ({ isActive, isPending }) => (
                                isPending ? <img src={homeicon2} alt="" className="size-6" /> : isActive ? <img src={homeicon} alt="" className="size-6" /> : <img src={homeicon2} alt="" className="size-6" />
                            )
                        }
                    </NavLink>
                </button>

                <button onClick={() => dispatch(inventoryToggle())} className="flex justify-center items-center rounded-full default-btn translated-item bg-Yellow size-12">
                    <img src={inventory} alt="" className="size-6" />
                </button>



                <button className="default-btn">
                    <NavLink
                        to="/userscreen/profile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        {
                            ({ isActive, isPending }) => (
                                isPending ? <img src={customer} alt="" className="size-6" /> : isActive ? <img src={customer2} alt="" className="size-6" /> : <img src={customer} alt="" className="size-6" />
                            )
                        }
                    </NavLink>
                </button>
            </div>

        </main>
    );
};

export default HomePage;