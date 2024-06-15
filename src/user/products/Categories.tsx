import ProductComponent from "../../components/ProductComponent"
import { useParams } from 'react-router-dom'

const Categories = () => {

  const { id } = useParams()

  return (
    <main className="p-3">

      <div className="flex sticky top-0 z-50 justify-between items-center py-3 mb-3 bg-white">
        <button onClick={() => { history.back() }} className="flex justify-center items-center p-2 default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
        </button>

        <p className="text-lg font-semibold capitalize text-Gray">{ id || "All Categories"}</p>

        <div />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
        <ProductComponent product={{
          image: "",
          shop: "Shoprite",
          title: "Raid Insecticide",
          loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
          price: 0
        }} componentType={2}
        />
      </div>

    </main>
  )
}

export default Categories