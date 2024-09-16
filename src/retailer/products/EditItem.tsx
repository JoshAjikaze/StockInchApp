import ErrorComponent from "@/components/ErrorComponent"
import LoadingComponent from "@/components/LoadingComponent"
import { useGetCategoriesQuery, useFetchSingleProductQuery, useUpdateInventoryItemMutation } from "@/features/api"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const EditItem = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  
  const { data, isFetching, isError, isSuccess } = useFetchSingleProductQuery(id)
  const { data: CategoriesData, isFetching: CategoriesFetching, isSuccess: CategoriesSuccess, error: CategoriesError } = useGetCategoriesQuery("")

  const [Product, setProduct] = useState(
    {
      id: id,
      name: "",
      description: "",
      price: 0,
      category: "",
      location: "",
      image: undefined,
    }
  )


  useEffect(() => {
    if (isSuccess) {
      setProduct({
        id: id,
        name: data?.name,
        description: data?.description,
        price: data?.price,
        category: data?.category,
        location: data?.location,
        image: data?.image_url
      })
    }
  }, [isSuccess])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {

    const { name, value, type, files } = event.target;

    if (type === 'file') {
      setProduct(Product => ({
        ...Product,
        image: files[0]
      }))
      // console.log(files[0]);
    } else {
      setProduct(Product => ({
        ...Product,
        [name]: value
      }));
    }
  };

  const [trigger, { isSuccess: InventoryUpdateSuccess }] = useUpdateInventoryItemMutation()

  const UpdateItemFn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      //@ts-ignore
      await trigger(Product).unwrap()

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {

    if(InventoryUpdateSuccess){
      toast.success("Item Updated. 👍")
      navigate("/retailer-screen/home")

    }

  }, [InventoryUpdateSuccess])
  


  return (
    <div className={`fixed bottom-0 h-screen bg-white w-[95%] px-[2.5%] z-[100] space-y-5`}>

      <div className="flex items-center justify-between mt-5">
        <button onClick={() => { history.back() }} className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
        <p className="text-xl font-bold text-Gray">Edit Item</p>
        <div />
      </div>

      {
        isFetching && <>Loading</>
      }

      {
        isError && <>Error</>
      }

      {
        isSuccess && (
          <form onSubmit={UpdateItemFn} className="flex flex-col space-y-5">

            <div className="relative flex basis-full">
              <LoadingComponent isFetching={CategoriesFetching} />
              <ErrorComponent isError={CategoriesError} />
              {
                CategoriesSuccess && (
                  <select id="" name="category" defaultValue={data?.category} onChange={handleChange} className="w-full h-12 p-2 rounded-md outline-none appearance-none peer border-slate-700/50 focus:border-Yellow">
                    <option>Select category</option>
                    {
                      CategoriesData?.map((data: { id: number, name: string }) => (
                        <option key={data.id} value={data.id}>{data.name}</option>
                      ))
                    }
                  </select>
                )
              }

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3 right-5 size-6 peer-focus:fill-Yellow">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>

            </div>


            <div className="space-y-5">
              <p className="font-bold">Upload Product Image</p>

              <div className="flex items-center gap-x-5">
                <label className="flex items-center justify-center rounded-md cursor-pointer size-20 bg-Yellow">
                  <input name="image_url" onChange={handleChange} type="file" className="hidden" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 fill-white stroke-[20px]">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  </svg>
                </label>

                {/* @ts-ignore */}
                <p className="font-semibold">{Product.image?.name || "Upload Image"}</p>

              </div>

              <p className="text-sm font-semibold">
                Upload Photo with white or transparent background for the best results
              </p>

              <p className="text-xs text-LightGray">
                Supported formats are .jpg and .png . <br />
                Image must not exceed 5mb
              </p>

            </div>

            <div className="relative flex">
              <input id="name" name="name" defaultValue={data?.name} onChange={handleChange} type="text" placeholder="name" className="w-full placeholder-transparent peer input-field" />
              <label htmlFor="name" className="input-label">Product Name</label>
            </div>

            <div className="relative flex">
              <input id="location" name="location" defaultValue={data?.location} onChange={handleChange} type="text" placeholder="location" className="w-full placeholder-transparent peer input-field" />
              <label htmlFor="location" className="input-label">Location</label>
            </div>

            <div className="relative flex">
              <input id="price" name="price" defaultValue={data?.price} onChange={handleChange} type="number" placeholder="price" className="w-full placeholder-transparent peer input-field" />
              <label htmlFor="price" className="input-label">Price</label>
            </div>

            <div className="relative flex flex-col gap-y-3">
              <p className="text-sm font-semibold">Product Description/Tags</p>
              <p className="text-xs font-semibold">write short tags/description Help your customers find your products faster separate each word with a comma  Eg.  Food stuff, Grain, food</p>
              <div className="relative">
                <textarea rows={5} name="description" defaultValue={data?.description} onChange={handleChange} id="email" placeholder="Name" className="w-full p-2 placeholder-transparent rounded-md outline-none peer focus:border-Yellow" />
                <label htmlFor="email" className="input-label">Description</label>
              </div>
            </div>
            <button className="border-0 rounded-md btn-outline bg-Yellow hover:bg-Yellow/90">
              Save
            </button>

          </form>
        )
      }

    </div>
  )
}

export default EditItem