import { useDispatch } from "react-redux"
import CategoryComponent from "../../components/CategoryComponent"
import { searchToggle, toggle } from "../../features/slices/togglerSlices"
// import { categoryToggle } from "../../features/slices/togglerSlices"

// import { useGetUserProfileQuery } from "../../features/api"
import { useGetUserProfile } from "../../utils/useGetUserProfile"
import { useGetCategoriesQuery } from "@/features/api"

import medication from '../../assets/images/medication.png'
import groceries from '../../assets/images/groceries.png'
import beauty from '../../assets/images/beauty.png'
import kids from '../../assets/images/kids.png'
import liquor from '../../assets/images/liquor.png'
import pets from '../../assets/images/pets.png'
import school from '../../assets/images/school.png'
import soft_drinks from '../../assets/images/soft-drinks.png'
import sports from '../../assets/images/sports.png'
import toiletry from '../../assets/images/toiletry.png'
// import milo from '../../assets/images/milo.png'
import RecentItems from "@/components/RecentItems"
import ErrorComponent from "@/components/ErrorComponent"

export const CategoriesData = [
    {
        image: groceries,
        title: "Groceries"
    },
    {
        image: medication,
        title: "Medication"
    },
    {
        image: beauty,
        title: "Beauty"
    },
    {
        image: kids,
        title: "Kids"
    },
    {
        image: liquor,
        title: "Liquor"
    },
    {
        image: pets,
        title: "Pets"
    },
    {
        image: school,
        title: "Groceries"
    },
    {
        image: soft_drinks,
        title: "Soft Drinks"
    },
    {
        image: sports,
        title: "Sports"
    },
    {
        image: toiletry,
        title: "Toiletry"
    },
]

const UserHome = () => {
    const dispatch = useDispatch()

    const { userProfile } = useGetUserProfile()
    const { isSuccess, isFetching, isError, data } = useGetCategoriesQuery("")

    return (
        <div className="space-y-5">
            {/* name tag menu */}
            <div className="flex items-center mb-5 text-xl font-semibold gap-x-5 text-Gray">
                <img
                    src={userProfile?.profile_picture || "https://placehold.co/100x100"}
                    alt="image"
                    className="rounded-full size-12"
                />
                <p>
                    Hi, {userProfile?.name} <span>👋</span>
                </p>
            </div>

            {/* search menu */}
            <div className="sticky flex top-5 gap-x-3">

                <input
                    onClick={() => dispatch(searchToggle())}
                    type="text"
                    placeholder="Search Products, Brands..."
                    className="hidden p-4 px-10 border-transparent border-solid rounded-md outline-none bg-LightGray basis-full"
                />

                {/* <div className="flex items-center pl-10 rounded-lg basis-full bg-LightGray text-Gray z-[100]"> */}
                <div onClick={() => dispatch(searchToggle())} className="flex items-center pl-10 rounded-lg basis-full bg-LightGray text-Gray">
                    Search Products, Brands...
                </div>

                {/* <button onClick={() => dispatch(categoryToggle())} className="flex items-center justify-center p-4 px-4 border-solid rounded-md size-14 bg-Yellow border-Yellow"> */}
                <button className="flex items-center justify-center p-4 px-4 border-solid rounded-md size-14 bg-Yellow border-Yellow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-10"
                    >
                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    </svg>
                </button>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="absolute left-3 top-[17px] size-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {/* Recent Items Menu */}
            <div className="">
                <p className="mb-3 font-semibold text-Gray">Recents</p>
                <RecentItems />
            </div>

            {/* categories menu */}
            <div>
                <div className="flex items-center justify-between text-Gray">
                    <p className="mb-3 font-semibold text-Gray">Top categories</p>
                    <button onClick={() => dispatch(toggle())} className="text-sm no-underline default-btn text-Gray">See all</button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {
                        isFetching && (
                            <>Loading...</>
                        )
                    }
                    <ErrorComponent isError={isError} />
                    {
                        isSuccess && (
                            <>
                                {
                                    data?.slice(0, 6).map((item: { id: number; icon: string; name: string }) => (
                                        <CategoryComponent key={item.id} categoryProps={{
                                            image: item.icon,
                                            title: item.name,
                                            id: item.id
                                        }} />
                                    ))
                                }
                            </>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default UserHome