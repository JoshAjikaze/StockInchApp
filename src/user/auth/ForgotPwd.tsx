import { FormEvent } from "react";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../features/slices/togglerSlices";
import email from '../../assets/icons/Email.png'

const ForgotPwd = () => {
    const dispatch = useDispatch()
    const handleReset = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(modalToggle())
    }

    return (
        <div className="flex flex-col gap-y-10 px-5 py-[2.5vh] min-h-[90vh]">
            <Modal child={<ResetMessage />} />
            <div className="flex justify-between items-center">

                <button onClick={() => { history.back() }} className="flex justify-center items-center p-2 default-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                    </svg>
                </button>

                <p className="text-lg font-medium">Reset Password</p>

                <div />
            </div>


            <form onSubmit={handleReset} className="flex flex-col gap-y-5 mt-5">
                <h4 className="font-light">Enter the email address assciated with your account</h4>

                <div className="flex relative">
                    <input id="name" type="text" placeholder="Name" className="w-full placeholder-transparent peer input-field" />
                    <label htmlFor="name" className="input-label">Email Address</label>
                </div>

                <button className="rounded-md border-0 btn-outline bg-Yellow hover:bg-Yellow/90">
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ForgotPwd

function ResetMessage(){
    return(
        <div className="bg-white h-[200px] w-[350px] text-center p-2 rounded-lg flex flex-col items-center justify-center gap-y-2">
            <p>A link has been sent to the provided email address</p>
            <img src={email} alt="email-icon" />
        </div>
    )
}