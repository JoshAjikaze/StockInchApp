import { Fragment, useState } from "react"
import ProductComponent from "../../components/ProductComponent"
import { useParams } from 'react-router-dom'

const Categories = () => {
  
  const [toggle, setToggle] = useState(false)
  const { id } = useParams()

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Fragment>
      <main className="p-3">

        <div className="flex sticky top-0 z-50 justify-between items-center py-3 mb-3 bg-white">
          <button onClick={() => { history.back() }} className="flex justify-center items-center p-2 default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
          </button>

          <p className="text-lg font-semibold capitalize text-Gray">{id || "All Categories"}</p>

          <button onClick={handleToggle} className="default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            </svg>
          </button>

        </div>

        <div className="grid grid-cols-2 gap-2">
          <ProductComponent product={{
            id: 1,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
          <ProductComponent product={{
            id: 2,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
          <ProductComponent product={{
            id: 3,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
          <ProductComponent product={{
            id: 4,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
          <ProductComponent product={{
            id: 5,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
          <ProductComponent product={{
            id: 6,
            image: "",
            shop: "Shoprite",
            title: "Raid Insecticide",
            loaction: "Obafemi Awolowo Way, Alausa, Ojodu ",
            price: 0
          }} componentType={2}
          />
        </div>

      </main>
      
      <div className={`${toggle ? "block" : "hidden"} fixed bottom-0 h-screen w-full z-50 bg-black/50`}>
        <div className={`${toggle ? "block" : "hidden"} fixed bottom-0 h-1/2 w-full z-50 bg-white rounded-t-lg`}>
          <div className="flex justify-between items-center p-3">
            <button onClick={handleToggle} className="flex justify-center items-center default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
            </button>

            <button className="default-btn">Reset All</button>
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Categories