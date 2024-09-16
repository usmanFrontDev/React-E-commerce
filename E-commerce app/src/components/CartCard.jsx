import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

function CartCard({
  oneProduct,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) {
  // const formattedPrice = oneProduct.price.toFixed(2);
  const formattedTotalPrice = (oneProduct.price * oneProduct.quantity).toFixed(
    2
  );

  return (
    <div className="cartcard">
      <div className="cartcardinner">
        <div className="cartcardleftside">
          <div className="imagebox">
            <img src={oneProduct.thumbnail} alt="" />
          </div>
          <div className="textbox">
            <h3>{oneProduct.category}</h3>
            <h2>{oneProduct.title}</h2>
          </div>
        </div>
        <div className="cartcardrightside">
          <div className="price">
            <h2>${oneProduct.price}</h2>
          </div>
          <div className="qauntity">
            <button
              onClick={() => handleDecrement(oneProduct)}
              className="minus"
              disabled={oneProduct.quantity === 1}
            >
              <FaMinus />
            </button>
            <h3>{oneProduct.quantity}</h3>
            <button
              onClick={() => handleIncrement(oneProduct)}
              className="plus"
            >
              <FaPlus />
            </button>
          </div>
          <div className="totalprice">
            <h2>${formattedTotalPrice}</h2>
          </div>
        </div>
        <button onClick={() => handleRemove(oneProduct)}>
          <ImCross />
        </button>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  oneProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartCard;
