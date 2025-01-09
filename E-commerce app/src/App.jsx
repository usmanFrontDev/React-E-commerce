import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Loader from "./components/loader";
import { useAuth0 } from "@auth0/auth0-react";

function App() {


  // IS AUTHENTICATED STATE
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // FILTERING FUNCTIONALITY
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // To store all products initially
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function fetchTrendingProductData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const trendingProductData = await response.json();
        setProducts(trendingProductData.products); // Update state with fetched data array
        setAllProducts(trendingProductData.products); // Store all products array
        setloading(false)
      } catch (error) {
        console.error("Error fetching the product data:", error);
      }
    }
    fetchTrendingProductData();
  }, []);
  const filteringProduct1 = () => {
    const LatestProducts = allProducts.slice(-5);
    setProducts(LatestProducts);
  };
  const filteringProduct2 = () => {
    const HightRated = allProducts.filter(
      (OneProduct) => OneProduct.rating <= 3
    );
    setProducts(HightRated);
  };
  const filteringProduct3 = () => {
    const filteredProduct = allProducts.filter(
      (OneProduct) => OneProduct.discountPercentage >= 15
    );
    setProducts(filteredProduct);
  };
  const ShwoingAll = () => {
    setProducts(allProducts);
    console.log(allProducts); // Reset to all products without refetching
  };

  // SEARCHING FUNCTIONALITY
  const [Search, setSearch] = useState("");
  const filterOnSearch = () => {
    const filteredSearchedProduct = allProducts.filter((e) => {
      return (
        e.category.toLowerCase().includes(Search.toLowerCase()) ||
        e.title.toLowerCase().includes(Search.toLowerCase())
      );
    });
    setProducts(filteredSearchedProduct);
    setSearch("");
  };

  //  CART FUNCTIONALITY
  const [productsInCart, SetproductsInCart] = useState([]);
  const cartAddnDel = (elem) => {
    const isProductInCart = productsInCart.some(
      (product) => product.id === elem.id
    );

    if (isProductInCart) {
      // Product is already in the cart, increment the quantity
      const updatedCart = productsInCart.map((product) =>
        product.id === elem.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      SetproductsInCart(updatedCart);
      console.log("Product quantity updated successfully");
    } else {
      // Product is not in the cart, add it with an initial quantity of 1
      const newProduct = { ...elem, quantity: 1 };
      const updatedCart = [newProduct, ...productsInCart];
      SetproductsInCart(updatedCart);
      console.log("Product is added successfully");
    }
  };
  const handleIncrement = (product) => {
    const updatedCart = productsInCart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    SetproductsInCart(updatedCart);
    console.log("incre cliked");
  };
  const handleDecrement = (product) => {
    const updatedCart = productsInCart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    SetproductsInCart(updatedCart);
    console.log("decre cliked");
  };
  const handleRemove = (product) => {
    const updatedCart = productsInCart.filter((item) => item.id !== product.id);
    SetproductsInCart(updatedCart);
    console.log("remove cliked");
  };
  const calculateSubtotal = () => {
    return productsInCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Function to display stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star" />);
    }

    // Add half star if applicable
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star" />);
    }

    return stars;
  };

  // Function to show product detail
  const [detailspage, setdetailspage] = useState(false);
  const [showedAProductDetails, setshowedAProductDetails] = useState([]);
  const [showedImageOnclickOfProduct, setshowedImageOnclickOfProduct] = useState('')
  const ShowProductDeatils = (OneElement) => {
    setdetailspage(true);
    setshowedAProductDetails([OneElement]);
    setshowedImageOnclickOfProduct(OneElement.thumbnail); 
    console.log(OneElement);
  };
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / container.offsetWidth) * 100;
    const yPercent = (y / container.offsetHeight) * 100;

    container.querySelector('img').style.transformOrigin = `${xPercent}% ${yPercent}%`;
    container.querySelector('img').style.transform = `scale(2)`; // Adjust scale factor for zoom level
  };

  //  WISHLIST ADDING FUNCTIONALITY
  const [productsInWishList, setproductsInWishList] = useState([]);
  const wishAddnDel = (elem) => {
 if(isAuthenticated){
  const isProductInWishList = productsInWishList.some(
    (product) => product.id === elem.id
  );
  if (isProductInWishList) {
    // If the product is already in the wishlist, remove it
    const updatedWishList = productsInWishList.filter(
      (product) => product.id !== elem.id
    );
    setproductsInWishList(updatedWishList);
    console.log("Product removed from wishlist");
  } else {
    // If the product is not in the wishlist, add it
    const updatedWishList = [elem, ...productsInWishList];
    setproductsInWishList(updatedWishList);
    console.log("Product added to wishlist");
  }
 }
 else {
  alert('please login to avail wishlist feature')
 }
  };

  const handlewisLisRemove = (product) => {
    const updatedCartofwislist = productsInWishList.filter((item) => item.id !== product.id);
    setproductsInWishList(updatedCartofwislist);
    console.log("remove wis cliked");
  };


// cart components functions
const subtotal = calculateSubtotal();
const discount = subtotal > 1000 ? 80 : 20;
const delivery = subtotal > 1000 ? 20 : 50; // $120 discount if subtotal > $1000, otherwise $20
const total = subtotal + 50 - discount;







  return (
    <>
 {loading ? <Loader/> :   
  <div className="MainContainer">
  <BrowserRouter>
    <Navbar
      Search={Search}
      setSearch={setSearch}
      filterOnSearch={filterOnSearch}
      isAuthenticated={isAuthenticated}
      loginWithRedirect={loginWithRedirect}
      logout={logout}
      user={user}
    />
    <Navigation
      Search={Search}
      setSearch={setSearch}
      products={products}
      filteringProduct1={filteringProduct1}
      filteringProduct2={filteringProduct2}
      filteringProduct3={filteringProduct3}
      ShwoingAll={ShwoingAll}
      filterOnSearch={filterOnSearch}
      cartAddnDel={cartAddnDel}
      productsInCart={productsInCart}
      SetproductsInCart={SetproductsInCart}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleRemove={handleRemove}
      calculateSubtotal={calculateSubtotal}
      renderStars={renderStars}
      detailspage={detailspage}
      setdetailspage={setdetailspage}
      showedAProductDetails={showedAProductDetails}
      showedImageOnclickOfProduct={showedImageOnclickOfProduct}
      ShowProductDeatils={ShowProductDeatils}
      setshowedImageOnclickOfProduct={setshowedImageOnclickOfProduct}
      handleMouseMove={handleMouseMove}
      allProducts={allProducts}
      wishAddnDel={wishAddnDel}
      productsInWishList={productsInWishList}
      handlewisLisRemove={handlewisLisRemove}
      total={total}
      discount={discount}
      delivery={delivery}
      subtotal={subtotal}
    ></Navigation>
    <Footer />
  </BrowserRouter>
</div>}
</>
  );
}

export default App;
