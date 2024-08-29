import { useState, Fragment } from "react"
import BackButton from "../../components/BackButton"
import { Link } from "react-router-dom"
import { useLogout } from "../../utils/useLogout";

const RetailerProfile = () => {
  const handleLogout = useLogout('/retailer-sign-in');

  const [updateProfileState, setUpdateProfileState] = useState<boolean>(false)

  return (
    <div className="p-5">
      {
        !updateProfileState ?
          <Fragment>
            <div className="flex items-center justify-between">
              <BackButton />
              <button onClick={() => { setUpdateProfileState(true) }} className="default-btn text-Yellow">Edit Profile</button>
            </div>

            <div className="bg-black/0 min-h-[60vh] mt-16 flex flex-col items-center p-5">
              <div className="flex flex-col items-center gap-y-5">
                <img src="https://placehold.co/100x100" alt="" className="rounded-full size-20" />
                <p className="text-xl font-semibold text-Gray">Store Name</p>
              </div>

              <section className="relative w-full md:w-[500px] space-y-5 mt-10 ">

                <Link to="/changeaddress" className="text-Gray no-underline relative w-[95%] px-[2.5%] py-2 border-solid border-[1px] border-black/25 rounded-md flex items-center gap-5 ">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-LightGray">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </p>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-Gray">+33A Adeniyi jones, Ikeja </p>
                  </div>
                  <span className="absolute right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-LightGray">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </Link>

                <div className="border-solid border-[1px] border-black/25 rounded-md">


                  <div className="relative w-[95%] px-[2.5%] py-2 flex items-center gap-5 ">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-LightGray">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </p>
                    <div>
                      <p className="font-medium">Phone No</p>
                      <p className="text-Gray">+234 906 201 0260 </p>
                    </div>

                  </div>

                  <hr className="w-[90%] bg-black/10 border border-solid border-transparent mx-auto" />

                  <div className="relative w-[95%] px-[2.5%] py-2 rounded-md flex items-center gap-5 ">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-LightGray">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </p>
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-Gray">name@example.com </p>
                    </div>

                  </div>

                </div>

                <Link to="/changepwd" className="text-Gray no-underline relative w-[95%] px-[2.5%] py-2 border-solid border-[1px] border-black/25 rounded-md flex items-center gap-5 ">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-LightGray">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </p>
                  <div>
                    <p className="font-medium">Change Password</p>
                  </div>
                  <span className="absolute right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-LightGray">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </Link>

                <button onClick={() => handleLogout()} className="p-2">Logout</button>


              </section>

            </div>
          </Fragment>
          :
          <Fragment>
            <button onClick={() => { setUpdateProfileState(false) }} className={`flex justify-center items-center bg-white rounded-md default-btn`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>

            <div className="flex items-center justify-center w-full my-20">
              <div className="relative flex items-center justify-center bg-white border-2 border-solid rounded-full border-Yellow size-22">
                <img src="https://placehold.co/100x100" alt="" className="rounded-full" />
                <button className="absolute flex items-center justify-center p-2 bg-white rounded-full shadow-md bottom-3 -right-4 default-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 fill-none stroke-Gray">
                    <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex">

              <form action="" className="flex flex-col gap-y-5 px-5 py-[2.5vh] w-full">
                <div className="relative flex">
                  <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent cursor-not-allowed peer input-field" />
                  <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                <div className="relative flex">
                  <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent cursor-not-allowed peer input-field" />
                  <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                <div className="relative flex">
                  <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent cursor-not-allowed peer input-field" />
                  <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                <div className="relative flex">
                  <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent cursor-not-allowed peer input-field" />
                  <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                <div className="relative flex">
                  <input id="email" type="text" placeholder="Name" className="w-full placeholder-transparent cursor-not-allowed peer input-field" readOnly />
                  <label htmlFor="email" className="input-label">24/03/1999</label>
                </div>
                <div className="flex justify-center w-full my-5">
                  <button className="yellow-btn">Save Changes</button>
                </div>
              </form>

            </div>

          </Fragment>
      }
    </div>
  )
}

export default RetailerProfile