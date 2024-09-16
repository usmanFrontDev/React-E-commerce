import PropTypes from "prop-types";

function CartBottomBanner({ CardBannerBottomState }) {
  return (
    <div className="cartbannerbottom">
      {CardBannerBottomState.map((OneMiniItem, index) => (
        <div key={index} className="cartbannercardmini">
          <div className="logobox">{OneMiniItem.icon}</div>
          <div className="contentbox">
            <h3>{OneMiniItem.heading}</h3>
            <h4>{OneMiniItem.para}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
CartBottomBanner.propTypes = {
  CardBannerBottomState: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      heading: PropTypes.string.isRequired,
      para: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CartBottomBanner;
