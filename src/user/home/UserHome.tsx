import { useDispatch } from "react-redux"
import CategoryComponent from "../../components/CategoryComponent"
import ProductComponent from "../../components/ProductComponent"
import { searchToggle, toggle } from "../../features/slices/togglerSlices"
import { categoryToggle } from "../../features/slices/togglerSlices"

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
import milo from '../../assets/images/milo.png'

// eslint-disable-next-line react-refresh/only-export-components
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

    return (
        <div className="space-y-5">
            {/* name tag menu */}
            <div className="flex gap-x-5 items-center mb-5 text-xl font-semibold text-Gray">
                <img
                    src="https://placehold.co/100x100"
                    alt="image"
                    className="rounded-full size-12"
                />
                <p>
                    Hi, Kunle <span>👋</span>
                </p>
            </div>

            {/* search menu */}
            <div className="flex sticky top-5 gap-x-3">

                <input
                    onClick={() => dispatch(searchToggle())}
                    type="text"
                    placeholder="Search Products, Brands..."
                    className="hidden p-4 px-10 rounded-md border-transparent border-solid outline-none bg-LightGray basis-full"
                />

                <div onClick={() => dispatch(searchToggle())} className="flex items-center pl-10 rounded-lg basis-full bg-LightGray text-Gray">
                    Search Products, Brands...
                </div>

                <button onClick={() => dispatch(categoryToggle())} className="flex justify-center items-center p-4 px-4 rounded-md border-solid size-14 bg-Yellow border-Yellow">
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
            <div>
                <p className="mb-3 font-semibold text-Gray">Recents</p>
                <div className="flex overflow-x-scroll flex-nowrap gap-x-5 no-scrollbar">
                    <ProductComponent product={{
                        id: 1,
                        image: milo,
                        shop: "Shoprite",
                        title: "Raid Insecticide",
                        loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
                        price: 1150.0
                    }} componentType={1} />
                    <ProductComponent product={{
                        id: 2,
                        image: milo,
                        shop: "Shoprite",
                        title: "Raid Insecticide",
                        loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
                        price: 0
                    }} componentType={1} />
                    <ProductComponent product={{
                        id: 3,
                        image: milo,
                        shop: "Shoprite",
                        title: "Raid Insecticide",
                        loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
                        price: 0
                    }} componentType={1} />
                    <ProductComponent product={{
                        id: 4,
                        image: milo,
                        shop: "Shoprite",
                        title: "Raid Insecticide",
                        loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
                        price: 0
                    }} componentType={1} />
                    <ProductComponent product={{
                        id: 5,
                        image: milo,
                        shop: "Shoprite",
                        title: "Raid Insecticide",
                        loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
                        price: 0
                    }} componentType={1} />

                </div>
            </div>

            {/* categories menu */}
            <div>
                <div className="flex justify-between items-center text-Gray">
                    <p className="mb-3 font-semibold text-Gray">Top categories</p>
                    <button onClick={() => dispatch(toggle())} className="text-sm no-underline default-btn text-Gray">See all</button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {
                        CategoriesData.slice(0, 6).map((item, Idx: number) => (
                            <CategoryComponent key={Idx} categoryProps={{
                                image: item.image,
                                title: item.title
                            }} />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default UserHome