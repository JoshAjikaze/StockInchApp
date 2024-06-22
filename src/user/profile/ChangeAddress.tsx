import BackButton from "../../components/BackButton"

const ChangeAddress = () => {
    return (
        <div className="w-full">

            <div className="flex justify-between items-center p-5">
                <BackButton /> <p className="text-xl font-semibold text-Gray">Change Address</p>
                <div />
            </div>

            <div className="flex relative p-5">
                <input type="text" className="px-12 w-[95%] h-12 rounded-md border border-transparent border-solid outline-none bg-LightGray" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute top-9 left-10 size-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                </svg>
            </div>


        </div>
    )
}

export default ChangeAddress