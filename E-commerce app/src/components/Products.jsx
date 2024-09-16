import { useEffect, useState } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";


function Products({ 
  selectedFilters,
  Search, 
  cartAddnDel, 
  renderStars,
  ShowProductDeatils,
  wishAddnDel, }) {
  // const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchTrendingProductData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const trendingProductData = await response.json();
        // setProducts(trendingProductData.products);
        setAllProducts(trendingProductData.products);
      } catch (error) {
        console.error("Error fetching the product data:", error);
      }
    }
    fetchTrendingProductData();
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const matchesFilter =
      selectedFilters.length === 0 ||
      selectedFilters.includes(product.category);
    const matchesSearch =
      product.category.toLowerCase().includes(Search.toLowerCase()) ||
      product.title.toLowerCase().includes(Search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="AllProductsBox">
      <div className="productsContainer">
      {filteredProducts.map((product) => (
        <div className="productbox" style={{ width: "24%" }} key={product.id}>
          <div className="productimage">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="productcontent">
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
            <div className="ratings">{renderStars(product.rating)}</div>
          </div>
          <button onClick={() => cartAddnDel(product)}>add to cart</button>
          <div className="holder">
            <FaEye className="iconhold" onClick={() => ShowProductDeatils(product)} />
            <FaRegHeart className="iconhold" onClick={()=> wishAddnDel(product)} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

Products.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  Search: PropTypes.string.isRequired,
  cartAddnDel: PropTypes.func.isRequired,
  renderStars: PropTypes.func.isRequired,
  detailspage: PropTypes.bool.isRequired,
  setdetailspage:PropTypes.func.isRequired,
  showedAProductDetails: PropTypes.array.isRequired,
  showedImageOnclickOfProduct: PropTypes.string.isRequired,
  setshowedImageOnclickOfProduct :PropTypes.func.isRequired,
  ShowProductDeatils: PropTypes.func.isRequired,
  handleMouseMove:PropTypes.func.isRequired,
  wishAddnDel:PropTypes.func.isRequired,
};

export default Products;
