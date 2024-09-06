import { useParams } from 'react-router-dom'
import ProductComponent from './ProductComponent'
import { useListInventoryQuery } from '@/features/api'
import BackButton from '@/components/BackButton'

const Products = () => {

    const { id } = useParams()
    const { isFetching: inventoryFetching, isSuccess: InventorySuccess, data: InventoryData } = useListInventoryQuery("")

    return (
        <div className='p-5'>

            <BackButton />

            <p className='invisible'>{id}</p>
            <section className='space-y-5'>
                {
                    inventoryFetching && (<>Loading...</>)
                }
                {
                    InventorySuccess && (
                        <>
                            {
                                InventoryData.map((item: any) => <ProductComponent key={item.id} product={{
                                    id: item.id,
                                    image: item.image_url,
                                    price: item.price,
                                    title: item.name,
                                    numberInInventory: 0,
                                    amountSold: 0
                                }} />)
                            }
                        </>

                    )
                }

            </section>

        </div>
    )
}

export default Products