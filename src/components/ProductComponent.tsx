import { Link } from "react-router-dom";
import CheckBox from "./CheckBox/CheckBox";

enum EProductComponentType {
  standardWidth = 1,
  flexed = 2,
}

type TProduct = {
  id: number,
  image: string;
  shop: string;
  title: string;
  location: string;
  price: number;
};

type TProductComponent = {
  product: TProduct;
  componentType: EProductComponentType;
};
const ProductComponent = ({ product, componentType }: TProductComponent) => {
  return (
    <div className={`${componentType == EProductComponentType.flexed ? "basis-1/2" : "min-w-[200px] h-[300px] inline"} border border-solid border-transparent shadow-sm z-50`}>

      <Link to={`/product/${product.id}`}>
        <div className="relative w-full rounded-t-lg h-[190px]">
          <img src={product.image || "https://placehold.co/147x122"} alt="" className="object-fill w-full h-[190px] rounded-t-md" />
          <p className="absolute font-medium text-white left-2 bottom-3">{product.shop}</p>
        </div>
      </Link>

      <div className="p-2 text-Gray">
        <p className="font-semibold">{product.title.slice(0,20)}{product.title.length > 20 && "..."}</p>
        <p className="text-xs text-LightGray">{product.location}</p>
      </div>

      <div className="flex items-center justify-between p-2 rounded-b-lg bg-LightGray">
        <p className="text-sm font-medium">₦{product.price}</p>
        <div className="invisible"><CheckBox /></div>
      </div>
    </div>
  );
};

export default ProductComponent;
