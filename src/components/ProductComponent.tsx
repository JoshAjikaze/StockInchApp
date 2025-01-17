import { Link } from "react-router-dom";
import CheckBox from "./CheckBox/CheckBox";

enum EProductComponentType {
  standardWidth = 1,
  flexed = 2,
  grid = 3
}

type TProduct = {
  id: number,
  image: string;
  shop: string;
  title: string;
  location: string;
  price: string | number;
};

type TProductComponent = {
  product: TProduct;
  componentType: EProductComponentType;
};
const ProductComponent = ({ product, componentType }: TProductComponent) => {
  return (
    <div className={`${componentType == EProductComponentType.flexed ? "basis-1/2" : componentType == EProductComponentType.standardWidth ? "min-w-[200px] h-[300px] inline" : componentType == EProductComponentType.grid ? "col-span-1" : ""} border border-solid border-transparent shadow-sm`}>

      <Link to={`/product/${product.id}`}>
        <div className="relative w-full rounded-t-lg h-[190px]">
          <img src={product.image || "https://placehold.co/147x122"} alt="" className="object-fill w-full h-[190px] rounded-t-md" />
          <p className="absolute font-medium text-white left-2 bottom-3">{product.shop}</p>
        </div>
      </Link>

      <div className="p-2 text-Gray">
        {componentType == EProductComponentType.grid ?
          <p className="font-semibold">{product.title.slice(0, 10)}{product.title.length > 10 && "..."}</p> :
          <p className="font-semibold">{product.title.slice(0, 20)}{product.title.length > 20 && "..."}</p>}
        <p className="text-xs text-LightGray">{product.location}</p>
      </div>

      <div className="flex items-center justify-between p-2 rounded-b-lg bg-LightGray">
        <p className="text-sm font-medium">₦{parseFloat(product.price as string).toLocaleString()}</p>
        <div className="invisible"><CheckBox /></div>
      </div>
    </div>
  );
};

export default ProductComponent;
