import { useParams } from 'react-router-dom'
import ProductComponent from './ProductComponent'

const Products = () => {
    const { id } = useParams()
    return (
        <div className='p-5'>
            <p className='invisible'>{id}</p>
            <section className='space-y-5'>
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
            </section>
        </div>
    )
}

export default Products