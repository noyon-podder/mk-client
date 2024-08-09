import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { useAppSelector } from "../../redux/hooks";
import ShippingForm from "./ShippingForm";

const ShippingPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const SHIPPING_CHARGE = 45;

  // calculate total price  of cart
  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const finalPrice = totalPrice + SHIPPING_CHARGE;

  return (
    <div className="py-5">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9 col-span-12">
            <div className="p-5 bg-white rounded-[12px] mb-6">
              <h2 className="text-[22px] font-bold text-headingColor">
                Shipping
              </h2>
            </div>
            <ShippingForm />
          </div>
          <div className="lg:col-span-3 col-span-12">
            <div className="bg-white p-5 shadow-sm rounded-[12px]">
              <h2 className="text-base font-bold text-headingColor leading-[18px] mb-5">
                Order Summary
              </h2>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm leading-[24px] text-gray-500">
                  Total Items
                </span>
                <span className="text-sm leading-[24px] text-gray-500">{`${
                  cart?.items?.length < 9
                    ? `0${cart?.items?.length}`
                    : cart?.items?.length
                }`}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm leading-[24px] text-gray-500">
                  Shipping
                </span>
                <span className="text-sm leading-[24px] text-gray-500 flex items-center">
                  BDT 45
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm leading-[24px] text-gray-500">
                  Sub Total
                </span>
                <span className="text-sm leading-[24px] text-headingColor font-semibold flex items-center">
                  BDT {cart.items.length > 0 ? finalPrice : "00"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShippingPage;
