import InventoryItemIncrement from "../../components/InventoryItemIncrement"

const ProductPage = () => {
  return (
    <div className="relative h-screen bg-black/50">
      <div className="fixed top-0 z-40 w-full h-1/2 bg-black">
        <img src={`https://placehold.co/147x122`} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute z-50 w-full h-screen bg-black/70">
        <div className="h-1/2" />
        <div className="p-4 h-1/2 bg-white rounded-t-2xl">
          {/* title */}
          <div className="flex gap-x-5 items-center">
            <img src={"https://placehold.co/100x100"} alt="" className="rounded-full size-12" />
            <p className="font-medium">Shoprite ICM</p>
          </div>
          {/* product title and count toggler */}
          <div className="flex justify-between items-center my-5">
            <p className="text-2xl font-semibold text-Gray">Raid Insecticides</p>
            <InventoryItemIncrement />
          </div>
          {/* price and location */}
          <div>
            <p className="text-lg">N1,150.00</p>
            <div className="flex items-center gap-x-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-Gray">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
              <span>Obafemi Awolowo Way, Alausa, Ojodu </span>
            </div>
          </div>
          {/* add to inventory button */}
          {/* related items */}
        </div>
      </div>
    </div>
  )
}

export default ProductPage