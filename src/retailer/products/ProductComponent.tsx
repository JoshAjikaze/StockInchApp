import { useDeleteInventoryItemMutation } from '@/features/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

type TProductProps = {
    id: number
    image: string,
    price: number,
    title: string,
    numberInInventory: number,
    amountSold: number,
}

type TComponentProps = {
    product: TProductProps
}

const ProductComponent = ({ product }: TComponentProps) => {

    const [showOptions, setshowOptions] = useState(false)
    const [deleteInventoryItem] = useDeleteInventoryItemMutation()

    async function deleteItem(id: number) {
        try {
            const action = await deleteInventoryItem(id).unwrap()
            if (action.isSuccess) {
                toast.success("Item Deleted!")
            }

            setshowOptions(!showOptions)

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className='relative flex gap-x-5 items-center text-Gray shadow-[0px_0px_6px_0px_rgba(0,0,0,0.3)] rounded-lg p-2'>
            
            <img src={product?.image || "https://placehold.co/100x100"} alt="" className='rounded-md' />
            
            <div className="flex items-center justify-between basis-full">
                
                <div className='space-y-1'>
                    <p className="text-lg font-semibold">{product?.title}</p>
                    <p className="">N{product?.price}</p>
                    <p className="space-x-5 text-xs">
                        <span>{product.numberInInventory} List Addition</span>
                        <span className='sr-only'>3 sold</span>
                    </p>
                </div>

                <div className="flex flex-col">
                    <button onClick={() => setshowOptions(!showOptions)} className='default-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {showOptions &&
                        <div className='space-y-3'>
                            <Link to={`/retailer-screen/editproduct/1`} className='flex items-center justify-between no-underline gap-x-5 text-Gray'>
                                {/* <span>Edit</span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                </svg>
                            </Link>

                            <button onClick={() => { deleteItem(product.id) }} className='flex items-center justify-between no-underline gap-x-5 default-btn text-Gray'>

                                {/* <span className='text-base'>Delete</span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>

                            </button>
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default ProductComponent