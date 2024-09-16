import { Route, Routes } from "react-router";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import PropTypes from "prop-types";
import WishList from "./WishList";

function Navigation({
  products,
  filteringProduct1,
  filteringProduct2,
  filteringProduct3,
  ShwoingAll,
  setSearch,
  Search,
  cartAddnDel,
  productsInCart,
  SetproductsInCart,
  handleIncrement,
  handleDecrement,
  handleRemove,
  calculateSubtotal,
  renderStars,
  handleMouseMove,
  wishAddnDel,
  productsInWishList,
  handlewisLisRemove,
}) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              filteringProduct1={filteringProduct1}
              filteringProduct2={filteringProduct2}
              filteringProduct3={filteringProduct3}
              ShwoingAll={ShwoingAll}
              cartAddnDel={cartAddnDel}
              renderStars={renderStars}
              handleMouseMove={handleMouseMove}
              wishAddnDel={wishAddnDel}
            />
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <Shop
              Search={Search}
              setSearch={setSearch}
              cartAddnDel={cartAddnDel}
              renderStars={renderStars}
              handleMouseMove={handleMouseMove}
              wishAddnDel={wishAddnDel}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cartAddnDel={cartAddnDel}
              productsInCart={productsInCart}
              SetproductsInCart={SetproductsInCart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleRemove={handleRemove}
              calculateSubtotal={calculateSubtotal}
            />
          }
        ></Route>
        <Route
        path="/wishlist"
        element={
          <WishList 
           productsInWishList={productsInWishList}
           handlewisLisRemove={handlewisLisRemove}
          />
        } 
        ></Route>
      </Routes>
    </>
  );
}

Navigation.propTypes = {
  products: PropTypes.array.isRequired,
  filteringProduct1: PropTypes.func.isRequired,
  filteringProduct2: PropTypes.func.isRequired,
  filteringProduct3: PropTypes.func.isRequired,
  ShwoingAll: PropTypes.func.isRequired,
  Search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  cartAddnDel: PropTypes.func.isRequired,
  productsInCart: PropTypes.array.isRequired,
  SetproductsInCart: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  calculateSubtotal: PropTypes.func.isRequired,
  renderStars: PropTypes.func.isRequired,
  handleMouseMove:PropTypes.func.isRequired,
  wishAddnDel:PropTypes.func.isRequired,
  productsInWishList: PropTypes.array.isRequired,
  handlewisLisRemove: PropTypes.func.isRequired,
};

export default Navigation;
