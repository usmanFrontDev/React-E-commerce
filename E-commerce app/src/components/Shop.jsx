import { useState } from "react";
import ShopSelector from "./ShopSelector";
import Products from "./Products";
import PropTypes from "prop-types";
import Detailspage from "./Detailspage";


function Shop({ 
  Search, 
  cartAddnDel, 
  renderStars,  
  handleMouseMove,
  wishAddnDel,
  }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (category, isChecked) => {
    setSelectedFilters((prevFilters) => {
      if (isChecked) {
        return [...prevFilters, category];
      } else {
        return prevFilters.filter((filter) => filter !== category);
      }
    });
  };

  const [detailspage, setdetailspage] = useState(false);
  const [showedAProductDetails, setshowedAProductDetails] = useState([]);
  const [showedImageOnclickOfProduct, setshowedImageOnclickOfProduct] = useState('')
  const ShowProductDeatils = (OneElement) => {
    setdetailspage(true);
    setshowedAProductDetails([OneElement]);
    setshowedImageOnclickOfProduct(OneElement.thumbnail); 
    console.log(OneElement);
  };


  return (
    <div className="ShopPage1">
         <Detailspage 
       cartAddnDel={cartAddnDel}
       renderStars={renderStars}
       detailspage={detailspage}
       setdetailspage={setdetailspage}
       showedAProductDetails={showedAProductDetails}
       showedImageOnclickOfProduct={showedImageOnclickOfProduct}
       setshowedImageOnclickOfProduct={setshowedImageOnclickOfProduct}
       handleMouseMove={handleMouseMove}/>
      <div className="shop1container">
        <ShopSelector onFilterChange={handleFilterChange} />
        <Products
          selectedFilters={selectedFilters}
          cartAddnDel={cartAddnDel}
          Search={Search}
          renderStars={renderStars}
          detailspage={detailspage}
          setdetailspage={setdetailspage}
          showedAProductDetails={showedAProductDetails}
          showedImageOnclickOfProduct={showedImageOnclickOfProduct}
          ShowProductDeatils={ShowProductDeatils}
          setshowedImageOnclickOfProduct={setshowedImageOnclickOfProduct}
          handleMouseMove={handleMouseMove}
          wishAddnDel={wishAddnDel}
        />
      </div>
    </div>
  );
}

Shop.propTypes = {
  Search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  cartAddnDel: PropTypes.func.isRequired,
  renderStars: PropTypes.func.isRequired,
  handleMouseMove:PropTypes.func.isRequired,
  wishAddnDel:PropTypes.func.isRequired,
};
export default Shop;
