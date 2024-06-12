// import { NavLink } from "react-router-dom";
import Allcategories from "../products/Allcategories";
import { Outlet } from "react-router-dom";

const HomePage = () => {

    return (
        <main className="flex flex-col px-5 py-[2.5vh] h-[95vh] space-y-5">
            <Allcategories />

                <Outlet />
            
            <div className="h-[7vh] fixed w-full bottom-0 bg-black/50 left-0">
                navbar
            </div>

        </main>
    );
};

export default HomePage;