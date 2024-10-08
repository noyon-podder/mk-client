import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import ProductSidebar from "./ProductSidebar";

interface TProps {
  handleMinPrice: (e: { target: { value: string } }) => void;
  handleMaxPrice: (e: { target: { value: string } }) => void;
}

const ProductSortSidebar = ({ handleMinPrice, handleMaxPrice }: TProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex gap-2 items-center px-3 py-1 bg-[#666] text-white rounded-sm cursor-pointer lg:hidden">
          <FaBars />
          Filter
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <h2 className="mb-3">Filter Product</h2>
          </SheetTitle>
          <SheetDescription>
            <ProductSidebar
              handleMaxPrice={handleMaxPrice}
              handleMinPrice={handleMinPrice}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ProductSortSidebar;
