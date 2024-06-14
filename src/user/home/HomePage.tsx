// import { NavLink } from "react-router-dom";
import Allcategories from "../products/Allcategories";
import { Outlet } from "react-router-dom";
import homeicon from '../../assets/icons/Home.png';
import homeicon2 from '../../assets/icons/Home(1).png';
import customer from '../../assets/icons/Customer.png';
import customer2 from '../../assets/icons/Customer(1).png';
import inventory from '../../assets/icons/inventory.png';

const HomePage = () => {

    return (
        <main className="flex flex-col px-5 py-[2.5vh] h-[95vh] space-y-5">
            <Allcategories />

            <Outlet />

            <div className="flex justify-center gap-x-20 h-[7vh] fixed w-[90%] px-[5%] pt-3 bottom-0 bg-white left-0">
                <button className="default-btn">
                    <img src={homeicon} alt="" className="size-6" />
                </button>
                <button className="default-btn translated-item rounded-full bg-Yellow">
                    <img src={inventory} alt="" className="" />
                </button>
                <button className="default-btn">
                    <img src={customer} alt="" className="size-6" />
                </button>
            </div>

        </main>
    );
};

export default HomePage;