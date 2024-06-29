
const EditItem = () => {

  return (
    <div className={`fixed bottom-0 h-screen bg-white w-[95%] px-[2.5%] z-[100] space-y-5`}>

      <div className="flex justify-between items-center mt-5">
        <button onClick={() => {history.back()}} className="default-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
        <p className="text-xl font-bold text-Gray">Edit Item</p>
        <div />
      </div>

      <div className="flex flex-col space-y-5">

      <div className="flex relative basis-full">
          <select id="" className="p-2 w-full h-12 rounded-md appearance-none outline-none peer border-slate-700/50 focus:border-Yellow">
            <option value="">Category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
          </select>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3 right-5 size-6 peer-focus:fill-Yellow">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>

        </div>


        <div className="space-y-5">
          <p className="font-bold">Upload Product Image</p>

          <label className="flex justify-center items-center rounded-md cursor-pointer size-20 bg-Yellow">
            <input type="file" className="hidden" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 fill-white stroke-[20px]">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </label>

          <p className="text-sm font-semibold">
            Upload Photo with white or transparent background for the best results
          </p>

          <p className="text-xs text-LightGray">
            Supported formats are .jpg and .png . <br />
            Image must not exceed 5mb
          </p>

        </div>

        <div className="flex relative">
          <input id="name" type="text" placeholder="name" className="w-full placeholder-transparent peer input-field" />
          <label htmlFor="name" className="input-label">Product Name</label>
        </div>

        <div className="flex relative">
          <input id="price" type="number" placeholder="price" className="w-full placeholder-transparent peer input-field" />
          <label htmlFor="price" className="input-label">Price</label>
        </div>

        <div className="flex relative flex-col gap-y-3">
          <p className="text-sm font-semibold">Product Description/Tags</p>
          <p className="text-xs font-semibold">write short tags/description Help your customers find your products faster separate each word with a comma  Eg.  Food stuff, Grain, food</p>
          <div className="relative">
            <textarea rows={5} id="email" placeholder="Name" className="w-full placeholder-transparent rounded-md peer" />
            <label htmlFor="email" className="input-label">Description</label>
          </div>
        </div>

        <button className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
          Save
        </button>

      </div>

    </div>
  )
}

export default EditItem