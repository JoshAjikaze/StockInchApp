import { searchToggle } from "../../features/slices/togglerSlices"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../features/store"
import { useGetProductsQuery } from "@/features/api"
import { useState } from "react"
import ProductComponent from "../ProductComponent"
import LoadingComponent from "../LoadingComponent"


const SearchPage = () => {


    const dispatch = useDispatch();
    const { isSearchToggled } = useSelector((state: RootState) => state.modalToggler)

    const { data, isFetching } = useGetProductsQuery("")

    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle the search logic
    const filteredProducts = data?.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.location.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <div className={` ${isSearchToggled ? "bottom-0" : "hidden"} fixed left-0 px-[2.5%] h-screen bg-white transition-all duration-300 z-[100] space-y-5`}>

            <LoadingComponent isFetching={isFetching} />


            <div className="flex items-center justify-between mt-10 gap-x-2">

                <button onClick={() => dispatch(searchToggle())} className="flex items-center justify-center default-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>

                <h2>Search</h2>
                
                <div />

                {/* Search input */}
            </div>

            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[80vw] text-base border border-transparent rounded-md outline-none px-[5vw] h-14 bg-LightGray"
            />



            {/* Render filtered products */}
            <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[75vh]">
                {filteredProducts?.length > 0 ? (
                    filteredProducts.map((product: any) => (
                        <ProductComponent key={product.id} product={{
                            id: product.id,
                            image: product.image,
                            shop: "",
                            title: product.name,
                            location: product.location,
                            price: product.price
                        }} componentType={3} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

        </div>
    )
}

export default SearchPage