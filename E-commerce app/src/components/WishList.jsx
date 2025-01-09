import { CiHeart } from "react-icons/ci";
import OneWishListItem from "./OneWishListItem";
import PropTypes from "prop-types";

function WishList({productsInWishList, handlewisLisRemove, cartAddnDel}) {
  return (
    <div className="wishlistmain">
      <div className="wishstaticcontent">
       <CiHeart className="wishhearticon"/>
       <h1>my wishlist</h1>
      </div>
      <div className="wishdynamiccontent">
        <div className="wishlistheader">
          <h3>Product name</h3>
          <h3>Unit price</h3>
          <h3>Stock status</h3>
          <h3>Fill cart</h3>
        </div>
        {productsInWishList.length === 0 ? <h1 className="identifierh1">there is no product in your wishlist </h1>:
        productsInWishList.map((wishOneItem, index)=>  <OneWishListItem cartAddnDel={cartAddnDel} handlewisLisRemove={handlewisLisRemove} key={index} wishOneItem={wishOneItem}/>)
        }
      </div>
    </div>
  )
}





WishList.propTypes ={
  productsInWishList: PropTypes.array.isRequired,
  handlewisLisRemove: PropTypes.func.isRequired
}


export default WishList
