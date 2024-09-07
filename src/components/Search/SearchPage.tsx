import { searchToggle } from "../../features/slices/togglerSlices"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../features/store"
import { useListInventoryQuery } from "@/features/api"
import { ChangeEvent, useState } from "react"


const SearchPage = () => {


    const dispatch = useDispatch();
    const { isSearchToggled } = useSelector((state: RootState) => state.modalToggler)

    const { data } = useListInventoryQuery("")

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    // Search function
    const handleSearch = (term: string) => {
        const results = data.filter((item: any) =>
            item?.name.toLowerCase().includes(term.toLowerCase())
            // || item?.author.toLowerCase().includes(term.toLowerCase()) || item?.categoryName.toLowerCase().includes(term.toLowerCase())
        );

        if (term.length > 0) {
            setFilteredResults(results);
        } else {
            setFilteredResults([])
        }
    };
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        handleSearch(term);
    };

    console.log(filteredResults)
    
    return (
        <div className={` ${isSearchToggled ? "bottom-0" : "-bottom-full"} fixed left-0 w-[95%] px-[2.5%] h-screen bg-white transition-all duration-300 z-[100] space-y-10`}>

            <div className="flex items-center pt-10 gap-x-5">
                <button onClick={() => dispatch(searchToggle())} className="flex items-center justify-center default-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="relative flex items-center justify-between w-full">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute left-3 size-5">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>

                    <input type="text" autoFocus className="px-10 text-base border border-transparent rounded-md outline-none h-14 basis-full bg-LightGray" value={searchTerm} onChange={handleSearchChange} />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute right-3 size-5">
                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                    </svg>
                </div>
            </div>

            <div className="text-lg font-medium">Search Results</div>

            <div className="w-full h-[700px] bg-black/0 overflow-hidden">

            </div>

        </div>
    )
}

export default SearchPage