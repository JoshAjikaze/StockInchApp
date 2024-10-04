import { Link } from "react-router-dom"

type TCategoryProps = {
    image: string,
    title: string,
    id: number,
}

type TCategoryComponentProps = {
    categoryProps: TCategoryProps
}

const CategoryComponent = ({ categoryProps }: TCategoryComponentProps) => {
    return (
        <Link onClick={() => localStorage.setItem("categoryName", categoryProps.title)} to={`/categories/${categoryProps.id}`} className="flex flex-col items-center justify-center p-3 text-black no-underline border border-solid rounded-lg basis-1/3 border-LightGray">
            <div className="flex flex-col items-center justify-center w-full gap-y-2">
                <img src={categoryProps.image || "https://placehold.co/70x70"} alt="" className="size-16" />
                <p>{categoryProps.title}</p>
            </div>
        </Link>
    )
}

export default CategoryComponent