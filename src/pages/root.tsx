import { Link } from "react-router-dom"
const Root = () => {
    return (
      <div className="w-full h-screen text-white bg-black sm:hidden">
          Root Page
          <Link to="/home">Home</Link>
      </div>
    )
  }
  
  export default Root