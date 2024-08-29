import InventoryItemIncrement from "../../components/InventoryItemIncrement"
import milo from '../../assets/images/milo.png'
import BackButton from "../../components/BackButton"
import { useParams } from "react-router-dom"
import RecentItems from "@/components/RecentItems"
import { useAddToCartMutation } from '@/features/api'



const ProductPage = () => {

  const { id } = useParams();

  const [addToCart] = useAddToCartMutation()

  async function AddToCart(){
    try {
      const response = await addToCart(id).unwrap()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="relative h-screen bg-black/50">
      <div className="fixed top-0 z-40 w-full bg-black h-1/2">
        <img src={milo} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute z-50 w-full h-screen bg-black/70">
      
        <div className="p-4 h-1/2">
          <BackButton background />
        </div>
        
        <div className="p-4 min-h-[50vh] bg-white rounded-t-2xl">
          {/* title */}
          <div className="flex items-center gap-x-5">
            <img src={"https://placehold.co/100x100"} alt="" className="rounded-full size-12" />
            <p className="font-medium">Shoprite ICM</p>
          </div>
          {/* product title and count toggler */}
          <div className="flex items-center justify-between my-5">
            <p className="text-2xl font-semibold text-Gray">Raid Insecticides</p>
            <InventoryItemIncrement />
          </div>
          {/* price and location */}
          <div className="space-y-5">
            <p className="text-lg">N1,14000.00</p>
            <div className="flex items-center gap-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-Gray">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span>Obafemi Awolowo Way, Alausa, Ojodu </span>
            </div>
          </div>
          {/* add to inventory button */}
          <div className="flex justify-center my-5">
            <button onClick={AddToCart} className="yellow-btn">Add To List</button>
          </div>
          {/* related items */}
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-Gray">Related Items</p>
            <div className="flex overflow-x-scroll flex-nowrap gap-x-5 no-scrollbar">
              <RecentItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage