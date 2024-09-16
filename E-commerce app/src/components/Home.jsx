import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";
import {
  FaEye,
  FaRegHeart,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import PropTypes from "prop-types";
import Detailspage from "./Detailspage";
import { useState } from "react";

function Home({
  products,
  ShwoingAll,
  filteringProduct1,
  filteringProduct2,
  filteringProduct3,
  cartAddnDel,
  renderStars,
  handleMouseMove,
  wishAddnDel,
}) {
  
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
    <>
      <div className="homeMain">
      <Detailspage 
       cartAddnDel={cartAddnDel}
       renderStars={renderStars}
       detailspage={detailspage}
       setdetailspage={setdetailspage}
       showedAProductDetails={showedAProductDetails}
       showedImageOnclickOfProduct={showedImageOnclickOfProduct}
       setshowedImageOnclickOfProduct={setshowedImageOnclickOfProduct}
       handleMouseMove={handleMouseMove}/>

        <div className="homepage1">
          <div className="homep1ContentContainer">
            <p>Its Our Responsibility</p>
            <h1>shop peacefully</h1>
            <h3>30% off at your first order</h3>
            <button>
              <Link to="/shop" className="homeshopbtn">
                Shop Now
              </Link>
            </button>
          </div>
        </div>
        <div className="homepage2">
          <h3>our trending products</h3>
          <div className="homepage2AllContent">
            <div className="productShowcase">
              <div className="producsHeader">
                <div className="all">
                  <h3 onClick={ShwoingAll}>all</h3>
                </div>
                <div className="otherthree">
                  <h3 onClick={() => filteringProduct1()}>new</h3>
                  <h3 onClick={() => filteringProduct2()}>featured</h3>
                  <h3 onClick={() => filteringProduct3()}>top selling</h3>
                </div>
              </div>
              <div className="productsContainer">
                {products.map((OneElement) => (
                  <div className="productbox" key={OneElement.id}>
                    <div className="productimage">
                      <img src={OneElement.thumbnail} alt="" />
                    </div>
                    <div className="productcontent">
                      <h3>{OneElement.title}</h3>
                      <h4>{`$ ${OneElement.price}`}</h4>
                      <div className="ratings">
                        {renderStars(OneElement.rating)}
                      </div>
                    </div>
                    <button onClick={() => cartAddnDel(OneElement)}>
                      add to cart
                    </button>
                    <div className="holder">
                      <FaEye
                        className="iconhold"
                        onClick={() => ShowProductDeatils(OneElement)}
                      />
                      <FaRegHeart className="iconhold" onClick={()=> wishAddnDel(OneElement)} />
                    </div>
                  </div>
                ))}
              </div>
              <button>show more</button>
            </div>
            <div className="bannerShowcase">
              <div className="bannerShowcaseHeader">
                <h3>Our Testimonials</h3>
              </div>
              <div className="firstbanner">
                <div className="imageofbanner">
                  <img src="/portrait.jpg" alt="" />
                </div>
                <h2>stephan robot</h2>
                <h4>web desginer</h4>
                <p>
                  Welcome to the shop mart we provide you the amazing offer of
                  your at your place the overall UI is peaceful so you can
                  choose whatever you want and make decisions in a peaceful user
                  experience.
                </p>
              </div>
              <div className="secondbanner">
                <h2>newsletter</h2>
                <p>join our mailing list</p>
                <input type="email" placeholder="E-mail" />
                <h4>subscribe</h4>
                <div className="iconsToSubs">
                  <FaFacebookF className="subsicon" />
                  <FaInstagram className="subsicon" />
                  <FaTwitter className="subsicon" />
                  <FaYoutube className="subsicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage3">
          <div className="leftsidebannermock">
            <div className="lftiupper">
              <img src="/Multi-Banner-1.avif" alt="" />
            </div>
            <div className="leftilower">
              <img src="/Multi-banner-2.avif" alt="" />
            </div>
          </div>
          <div className="rightsidebannermock">
            <div className="rigthyupper">
              <div className="rightupleftside">
                <img src="/Multi-Banner-3.webp" alt="" />
              </div>
              <div className="rightuprigthside">
                <img src="/Multi-banner-4.avif" alt="" />
              </div>
            </div>
            <div className="rigthlower">
              <img src="/Multi-Banner-5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  ShwoingAll: PropTypes.func.isRequired,
  filteringProduct1: PropTypes.func.isRequired,
  filteringProduct2: PropTypes.func.isRequired,
  filteringProduct3: PropTypes.func.isRequired,
  cartAddnDel: PropTypes.func.isRequired,
  renderStars: PropTypes.func.isRequired,
  handleMouseMove:PropTypes.func.isRequired,
  wishAddnDel: PropTypes.func.isRequired,
};

export default Home;
