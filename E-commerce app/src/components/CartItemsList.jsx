import CartCard from "./CartCard";
import PropTypes from "prop-types";

function CartItemsList({
  productsInCart,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) {
  return (
    <>
      {productsInCart.length === 0 ? (
        <h1 className="identifierh1">there is no product in your cart </h1>
      ) : (
        productsInCart.map((oneProduct) => (
          <CartCard
            key={oneProduct.id}
            oneProduct={oneProduct}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
          />
        ))
      )}
    </>
  );
}

CartItemsList.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartItemsList;
