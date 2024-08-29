import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../features/slices/togglerSlices";
import { RootState } from "../../features/store"
import { Link } from "react-router-dom";
import { CategoriesData } from "../home/UserHome";
import { useGetCategoriesQuery } from "@/features/api";

const Allcategories = () => {

    const dispatch = useDispatch();
    const { isToggled } = useSelector((state: RootState) => state.categoryToggler);
    
    const { isSuccess:CategoriesSuccess, isFetching :CategoriesFetching, isError:CategoriesError, data: categoriesData } = useGetCategoriesQuery("")


    return (
        <div className={`${isToggled ? "left-0" : "-left-full"} fixed z-50 top-0 w-full bg-white h-full transition-all duration-300 pt-5`}>
            <div className="flex items-center justify-between px-5">
                <button onClick={() => dispatch(toggle())} className="flex items-center justify-center p-2 default-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </button>

                <p className="text-lg font-semibold">All Categories</p>

                <div />
            </div>

            <div className="my-10 p-5 h-[70vh] overflow-y-scroll no-scrollbar">
                {
                    categoriesData?.map((item, Idx) => (
                        <Link to={`/categories/${item.id}`} onClick={() => dispatch(toggle())} key={Idx} className="relative flex items-center text-black no-underline border gap-x-5">
                            <p>
                                <img src={item.icon || "https://placehold.co/30x30"} alt="" className="size-12" />
                            </p>
                            
                            <p className="text-base font-medium">{item.name}</p>
                            
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