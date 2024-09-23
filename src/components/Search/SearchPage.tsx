import { searchToggle } from "../../features/slices/togglerSlices"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../features/store"
import { useGetProductsQuery } from "@/features/api"
import { useState } from "react"
import ProductComponent from "../ProductComponent"


const SearchPage = () => {


    const dispatch = useDispatch();
    const { isSearchToggled } = useSelector((state: RootState) => state.modalToggler)

    const { data } = useGetProductsQuery("")

    console.log(data)

    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle the search logic
    const filteredProducts = data?.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.location.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <div className={` ${isSearchToggled ? "bottom-0" : "hidden"} fixed left-0 w-[95%] px-[2.5%] h-screen bg-white transition-all duration-300 z-[100] space-y-10`}>

            <div className="flex mt-5 gap-x-5">
                <button onClick={() => dispatch(searchToggle())} className="flex items-center justify-center default-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-10 text-base border border-transparent rounded-md outline-none h-14 basis-full bg-LightGray"
                />
            </div>



            {/* Render filtered products */}
            <div className="grid grid-cols-2 gap-2">
                {filteredProducts?.length > 0 ? (
                    filteredProducts.map((product: any) => (
                        <ProductComponent key={product.id} product={{
                            id: product.id,
                            image: product.image,
                            shop: "",
                            title: product.name,
                            location: product.location,
                            price: product.price
                        }} componentType={1} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    )
}

export default SearchPage