import { Link } from "react-router-dom"

type TCategoryProps = {
    image: string,
    url: string,
    title: string
}

type TCategoryComponentProps = {
    categoryProps: TCategoryProps
}

const CategoryComponent = ({ categoryProps }: TCategoryComponentProps) => {
    return (
        <Link to={categoryProps.url} className="p-3 text-black no-underline rounded-lg border border-solid basis-1/3 border-LightGray">
            <div className="flex flex-col gap-y-2 justify-center items-center w-full">
                <img src={categoryProps.image || "https://placehold.co/70x70"} alt="" />
                <p>{categoryProps.title}</p>
            </div>
        </Link>
    )
}

export default CategoryComponent