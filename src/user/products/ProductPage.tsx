import InventoryItemIncrement from "../../components/InventoryItemIncrement"
import BackButton from "../../components/BackButton"
import { useParams } from "react-router-dom"
import RecentItems from "@/components/RecentItems"
import { useAddToCartMutation, useFetchSingleProductQuery } from '@/features/api'
import { Bounce, toast } from "react-toastify"
import LoadingComponent from "@/components/LoadingComponent"



const ProductPage = () => {

  const { id } = useParams();

  const [addToCart, { isLoading }] = useAddToCartMutation()

  const { isFetching, isSuccess, isError, data } = useFetchSingleProductQuery(id)
  console.log(data)
const baseUrl = "https://ajikaze.pythonanywhere.com";
  
  async function AddToCart() {
    try {
      const response = await addToCart(id).unwrap()
      console.log(response)
      if (response.success) {
        toast.success(response.success, {
          hideProgressBar: true,
          transition: Bounce,
          theme: "dark"
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="relative h-screen bg-black/50">

      <div className="fixed top-0 z-40 w-full h-1/2">
        {
          isSuccess && (
            // <img src={data.image_url || 'https://placehold.co/200x200'} alt="imageX" className="" />
            <img src={`${baseUrl}/${data.image}`} className="object-cover w-full h-full" />
          )
        }
      </div>

      <div className="absolute z-50 w-full h-screen bg-black/70">

        <div className="p-4 h-1/2">
          <BackButton background />
        </div>

        <div className="p-4 min-h-[50vh] bg-white rounded-t-2xl">
          <LoadingComponent isFetching={isFetching} />
          {isSuccess &&
            <>

              {/* title */}
              <div className="flex items-center gap-x-5">
                <img src={`${baseUrl}/${data.image}` || 'https://placehold.co/200x200'} alt="" className="rounded-full size-12" />
                <p className="font-medium">{data?.owner || "unknown"}</p>
              </div>
              {/* product title and count toggler */}
              <div className="flex items-center justify-between my-5">
                <p className="text-2xl font-semibold text-Gray">{data?.name || "unknown"}</p>
                <InventoryItemIncrement />
              </div>
              {/* price and location */}
              <div className="space-y-5">
                <p className="text-lg">{data.price || "unknown"}</p>
                <div className="flex items-center gap-x-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-Gray">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <span>{data.location || "unknown"} </span>
                </div>
              </div>
              {/* add to inventory button */}
              <div className="flex justify-center my-5">
                <button disabled={isLoading} onClick={AddToCart} className="yellow-btn">{isLoading ? <>
                  <svg className={`mr-3 -ml-1 size-5 text-bica_blue animate-spin `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </> :
                  'Add To List'
                }
                </button>
              </div>
              {/* related items */}
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-Gray">Related Items</p>
                <div className="flex overflow-x-scroll flex-nowrap gap-x-5 no-scrollbar">
                  <RecentItems />
                </div>
              </div>
            </>
          }
          {
            isError && <>An Error Occured</>
          }
        </div>

      </div>

    </div>
  )
}

export default ProductPage