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
  loaction: string;
  price: number;
};

type TProductComponent = {
  product: TProduct;
  componentType: EProductComponentType;
};
const ProductComponent = ({ product, componentType }: TProductComponent) => {
  return (
    <div className={`${componentType == EProductComponentType.flexed ? "basis-1/2" : "min-w-[200px] inline"} border border-solid border-transparent shadow-sm`}>
      <div className="relative w-full rounded-t-lg">
        <Link to={`/product/${product.id}`}>
          <img src={product.image || "https://placehold.co/147x122"} alt="" className="object-cover w-full h-full rounded-t-md" />
          <p className="absolute left-2 bottom-3 font-medium text-white">{product.shop}</p>
        </Link>
      </div>

      <div className="p-2 text-Gray">
        <p className="font-semibold">{product.title}</p>
        <p className="text-xs text-LightGray">{product.loaction}</p>
      </div>

      <div className="flex justify-between items-center p-2 rounded-b-lg bg-LightGray">
        <p>₦{product.price}</p>
        <CheckBox />
      </div>
    </div>
  );
};

export default ProductComponent;
