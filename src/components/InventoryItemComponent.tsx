import trash from '../assets/icons/Remove.png';
import InventoryItemIncrement from './InventoryItemIncrement';

type TProducts = {
  title: string,
  shop: string,
  location: string, 
  price: number, 
  image: string
}

type TComponentProps = {
  product: TProducts
}

const InventoryItemComponent = ({product}:TComponentProps) => {
  return (


    <section className="flex items-center justify-between text-sm p-2 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.3)] rounded-lg">
      {/* Left side */}
      <div className="space-y-3">
        <div className="flex gap-x-5 items-center">
          <img src={ product.image || "https://placehold.co/100x100"} alt="" className="rounded-lg size-12" />
          <div>
            <p className="text-base font-semibold">{product.title}</p>
            <p><span>{product.shop}</span></p>
          </div>
        </div>
        <div>
          <p className="flex gap-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>{product.location}</span></p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-y-2 items-end text-xs">
        <button className="default-btn">
          <img src={trash} alt="" className="size-6" />
        </button>

      <InventoryItemIncrement />

        <p className='text-sm'><span className="font-medium">N</span> {product.price}</p>
      </div>
    </section>
  )
}

export default InventoryItemComponent