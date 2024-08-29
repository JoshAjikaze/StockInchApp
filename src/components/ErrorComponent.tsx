
const ErrorComponent = ({isError, message, className}: {isError:boolean, message?:string, className?:string}) => {
    return (
        <div className={`absolute top-0 flex items-center justify-center w-full font-semibold ${className}`}>
            {
                isError && (
                    <>
                        { message || "An Error Occured! Please" }
                        <button className="p-2 ml-5 border border-black border-solid shadow-sm default-btn" onClick={() => { location.reload() }}>Refresh</button>
                    </>
                )
            }
        </div>
    )
}

export default ErrorComponent