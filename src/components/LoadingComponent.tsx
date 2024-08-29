
const LoadingComponent = ({isFetching}:{isFetching:boolean}) => {
    return (
        <>
            {
                isFetching && (<h1 className="text-xl font-bold text-center">Loading...</h1>)
            }
        </>
    )
}

export default LoadingComponent