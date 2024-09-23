import { useGetProductsQuery } from "@/features/api";
import ProductComponent from "./ProductComponent";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

const RecentItems = () => {

    const { isSuccess, isFetching, isError, data } = useGetProductsQuery("")

    return (
        <div className="flex overflow-x-scroll flex-nowrap gap-x-5 no-scrollbar">

            <LoadingComponent isFetching={isFetching} />

            {
                isSuccess && (
                    <>
                        {
                            data?.slice(-5).reverse().map((item: { id: number; image_url: string; name: string; location: string; price: number }) =>
                                <ProductComponent key={item.id} product={{
                                    id: item.id,
                                    image: item.image_url,
                                    shop: "",
                                    title: item.name,
                                    location: item.location,
                                    price: item.price
                                }} componentType={1} />
                            )
                        }
                    </>
                )
            }

            <ErrorComponent isError={isError} />

        </div>
    )
}

export default RecentItems