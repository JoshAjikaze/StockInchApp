import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../features/slices/togglerSlices";
import { RootState } from "../../features/store"
import { Link } from "react-router-dom";

const Allcategories = () => {

    const data = [
        {
            icon: "",
            title: "Medication"
        },
        {
            icon: "",
            title: "Liquor"
        },
        {
            icon: "",
            title: "Soft Drinks"
        },
        {
            icon: "",
            title: "Snacks"
        },
        {
            icon: "",
            title: "Toiletries"
        },
        {
            icon: "",
            title: "Groceries"
        },
    ]

    const dispatch = useDispatch();
    const { isToggled } = useSelector((state: RootState) => state.categoryToggler);

    return (
        <div className={`${isToggled ? "left-0" : "-left-full"} fixed top-0 w-full bg-white h-full transition-all duration-300`}>
            <div className="flex justify-between items-center px-5">
                <button onClick={() => dispatch(toggle())} className="flex justify-center items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </button>

                <p>All Categories</p>

                <div />
            </div>

            <div className="my-10 p-5 h-[70vh] overflow-y-scroll no-scrollbar">
                {
                    data.map((item, Idx) => (
                        <Link to={`/categories/${item.title.toLowerCase()}`} onClick={() => dispatch(toggle())} key={Idx} className="flex relative gap-x-5 items-center text-black no-underline border">
                            <p>
                                <img src={item.icon || "https://placehold.co/30x30"} alt="" className="size-14" />
                            </p>
                            <p>{item.title}</p>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute right-0 size-5">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Allcategories