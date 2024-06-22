import BackButton from "../../components/BackButton"

const ChangePWD = () => {
  return (
    <div className="w-full">
        
        <div className="flex justify-between items-center p-5">
            <BackButton /> <p className="text-xl font-semibold text-Gray">Change Password</p>
            <div />
        </div>

        <form action="" className="flex flex-col gap-y-5 py-[2.5vh] p-5">
                <div className="flex relative">
                  <input id="email" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                  <label htmlFor="email" className="input-label">Enter Password</label>
                </div>
                
                <div className="flex relative">
                  <input id="email" type="password" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                  <label htmlFor="email" className="input-label">Confirm Password</label>
                </div>
               
                <div className="flex justify-center my-5 w-full">
                  <button className="yellow-btn">Save Changes</button>
                </div>
              </form>
    </div>
  )
}

export default ChangePWD