import { Fragment, useEffect, useState } from "react"
import ProductComponent from "@/components/ProductComponent"
import { useParams } from 'react-router-dom'
import { useGetProductsByCategoryQuery } from "@/features/api"

const Categories = () => {

  const [toggle, setToggle] = useState(false)
  const { id } = useParams()

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const { isSuccess, isFetching, isError, data } = useGetProductsByCategoryQuery(id)
  console.log(data, isFetching, isError)





  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc'); // Initial order

  const sortByPrice = (data: any, order: any) => {
    // Clone the data to avoid mutating the original array
    const sortedData = [...data];
    
    console.log(sortOrder)

    sortedData.sort((a, b) => {
      // Parse the price strings to numbers for accurate comparison
      const priceA = parseFloat(a.price.replace(/,/g, ''));
      const priceB = parseFloat(b.price.replace(/,/g, ''));

      // Sort based on order (ascending or descending)
      if (order === 'asc') {
        return priceA - priceB;
      } else if (order === 'desc') {
        return priceB - priceA;
      } else {
        // Handle invalid order (optional)
        console.error('Invalid sort order. Use "asc" or "desc".');
        return 0;
      }
    });

    return sortedData;
  };


  const handleSort = (newOrder: any) => {
    const sorted = sortByPrice([...sortedData], newOrder);
    setSortedData(sorted);
    setSortOrder(newOrder);
  };

  const  categoryName = localStorage.getItem("categoryName")
  console.log(categoryName)

  useEffect(() => {
    if (isSuccess) {
      setSortedData(data)
    }
  },[isSuccess])

  return (
    <Fragment>
      <main className="p-3">

        <div className="sticky top-0 z-50 flex items-center justify-between py-3 mb-3 bg-white">
          <button onClick={() => { history.back() }} className="flex items-center justify-center p-2 default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
          </button>

          <p className="text-lg font-semibold capitalize text-Gray">{categoryName || id || "All Categories"}</p>

          <button onClick={handleToggle} className="default-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
            </svg>
          </button>

        </div>

        <div className="grid grid-cols-2 gap-2">
          {
            isFetching && (
              <>Loading...</>
            )
          }

          {
            isSuccess && (
              <>
                {
                  sortedData?.map((item: { id: number; image: string; name: string; location: string; price: number }) =>
                    <ProductComponent key={item.id} product={{
                      id: item.id,
                      image: item.image,
                      shop: "Shoprite",
                      title: item.name,
                      location: item.location,
                      price: item.price
                    }} componentType={1} />
                  )
                }
              </>
            )
          }
          {
            isSuccess && (
              <>
                {
                  data.length < 1 && (
                    <>There are no Items in this category yet</>
                  )
                }
              </>
            )
          }

        </div>

      </main>

      <div className={`${toggle ? "block" : "hidden"} fixed bottom-0 h-screen w-full z-50 bg-black/50`}>
        <div className={`${toggle ? "block" : "hidden"} fixed bottom-0 h-1/5 w-full z-50 bg-white rounded-t-lg`}>
          <div className="flex items-center justify-between p-3">
            <button onClick={handleToggle} className="flex items-center justify-center default-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>

            <button className="invisible default-btn">Reset All</button>
          </div>
          <section className="flex items-center justify-center gap-5">
            <button onClick={() => handleSort('asc')} className="p-2 font-semibold border-0 rounded-md bg-Yellow">Sort (Low to High)</button>
            <button onClick={() => handleSort('desc')} className="p-2 font-semibold border-0 rounded-md bg-Yellow">Sort (High to Low)</button>          </section>
        </div>
      </div>

    </Fragment>
  )
}

export default Categories