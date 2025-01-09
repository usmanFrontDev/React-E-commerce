import { MdDeleteSweep } from "react-icons/md";
import PropTypes from "prop-types";

function OneWishListItem({wishOneItem, handlewisLisRemove, cartAddnDel}) {
  return (
    <div className="onewishlistitem">
    <div className="wishprodinfo">
      <div className="wishinfoimage"> 
        <img src={wishOneItem.thumbnail}alt="" />
      </div>
      <div className="wishinfotext">
        <h2>{wishOneItem.title}</h2>
      </div>
    </div>
    <div className="wishprodprice">
      <h2>${wishOneItem.price}</h2>
    </div>
    <div className="wishprodsto">
    <h2>{wishOneItem.availabilityStatus}</h2>
    </div>
    <div className="wishprodhandle">
      <button onClick={()=> cartAddnDel(wishOneItem)}>Add to cart</button>
      <MdDeleteSweep onClick={()=> handlewisLisRemove(wishOneItem)} className="wishoneitemdel" />
    </div>
  </div>
  )
}



OneWishListItem.propTypes = {
  wishOneItem: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    availabilityStatus: PropTypes.string.isRequired,
  }).isRequired,
  handlewisLisRemove: PropTypes.func.isRequired
}


export default OneWishListItem;
