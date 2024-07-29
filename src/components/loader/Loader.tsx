import './loader.css'

const Loader = () => {
  return (
    <div className="flex fixed z-[100] justify-center items-center w-full h-screen backdrop-blur bg-black/90">
        <div className="loader" />
    </div>
  )
}

export default Loader