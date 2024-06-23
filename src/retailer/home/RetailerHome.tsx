import { NavLink, Outlet } from 'react-router-dom'
import homeicon from '../../assets/icons/Home.png';
import homeicon2 from '../../assets/icons/Home(1).png';
import customer from '../../assets/icons/Customer.png';
import customer2 from '../../assets/icons/Customer(1).png';
import { useState } from 'react';
import AddItem from '../products/AddItem';

const RetailerHome = () => {

    const [ToggleAddItem, setToggleAddItem] = useState(false)
    const handleAddItem = () => {
        setToggleAddItem(!ToggleAddItem)
    }

    return (
        <div>
            <AddItem showComponent={ToggleAddItem} />
            <Outlet />


            <div className="flex justify-center gap-x-20 h-[7vh] fixed w-[90%] px-[5%] pt-3 bottom-0 bg-white left-0 z-50">

                <button className="default-btn">
                    <NavLink
                        to="/retailer-screen/home"
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

                <button onClick={handleAddItem} className="flex justify-center items-center rounded-full default-btn translated-item bg-Yellow size-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white stroke-white">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>



                <button className="default-btn">
                    <NavLink
                        to="/retailer-screen/profile"
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
        </div>
    )
}

export default RetailerHome