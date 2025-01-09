import CartItemsList from "./CartItemsList";
import { FaTruckFast } from "react-icons/fa6";
import CartBottomBanner from "./CartBottomBanner";
import { FcCustomerSupport } from "react-icons/fc";
import { IoChatbubbleSharp } from "react-icons/io5";
import { ImGift } from "react-icons/im";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({
  productsInCart,
  handleIncrement,
  handleDecrement,
  handleRemove,
  calculateSubtotal,
  total,
  discount,
  delivery, 
  subtotal,
}) {
  const [CardBannerBottomState] = useState([
    {
      icon: <FaTruckFast className="Iconic" />,
      heading: "Free Shipping",
      para: "Order more then 1000$",
    },
    {
      icon: <FcCustomerSupport className="Iconic" />,
      heading: "call us anytime",
      para: "+34-555-6784",
    },
    {
      icon: <IoChatbubbleSharp className="Iconic" />,
      heading: "chat with us",
      para: "we offer 24 hours chat support",
    },
    {
      icon: <ImGift className="Iconic" />,
      heading: "gift cards",
      para: "for your loved one in any amount",
    },
  ]);

  const infoCash = [
    { key: "cart subtotal", word: `$${subtotal.toFixed(2)}` },
    { key: "delivery fee", word: `+$${delivery}` },
    { key: "discounted", word: `-$${discount}` },
    { key: "Total", word: `$${total.toFixed(2)}` },
  ];

  return (
    <div className="Cartmain">
      <div className="cartmaininner">
        <div className="cartitemmain">
          <h1>Shopping bag</h1>
          <p>{productsInCart.length} items in your bag</p>
          <div className="cartitemmaincards">
            <div className="cartItemheader">
              <div className="cartheaderleft">
                <h3>Product</h3>
              </div>
              <div className="cardheaderright">
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Total Price</h3>
              </div>
            </div>
            <CartItemsList
              productsInCart={productsInCart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleRemove={handleRemove}
              calculateSubtotal={calculateSubtotal}
            />
          </div>
        </div>
        <div className="cartinfomain">
          <div className="cardinfomaininner">
            <h2>cart total</h2>
            {infoCash.map((Onedesc, index) => (
              <div key={index} className="desc">
                <h4>{Onedesc.key}</h4>
                <h3>{Onedesc.word}</h3>
              </div>
            ))}
            <button>apply</button>
          </div>
          <button>
            <Link to="/checkout">
              checkout
            </Link>
          </button>
        </div>
      </div>
      <CartBottomBanner CardBannerBottomState={CardBannerBottomState} />
    </div>
  );
}

Cart.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  calculateSubtotal: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  discount: PropTypes.func.isRequired,
  delivery: PropTypes.func.isRequired,
  subtotal: PropTypes.func.isRequired,
};

export default Cart;

