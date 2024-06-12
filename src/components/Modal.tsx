import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../features/store"
import { modalToggle } from "../features/slices/togglerSlices"
import { ReactElement } from "react"

type TComponentProps = {
    child: ReactElement | JSX.Element
}
const Modal = ({ child }: TComponentProps) => {
    const dispatch = useDispatch()
    const { isToggled } = useSelector((state: RootState) => state.modalToggler)
    return (
        <div className={`${isToggled ? "left-0" : "-left-full"} fixed z-50 top-0 w-full h-screen bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center`}>
            {child}
            <button onClick={() => dispatch(modalToggle())} className="mt-5 flex items-center justify-center size-12 rounded-full border-solid border-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
    )
}

export default Modal