import PropTypes from "prop-types";
import { useEffect } from "react";
import { GoEyeClosed } from "react-icons/go";

function Detailspage({
  cartAddnDel,
  renderStars,
  detailspage,
  setdetailspage,
  showedAProductDetails,
  showedImageOnclickOfProduct,
  setshowedImageOnclickOfProduct,
  handleMouseMove,
})

{
  useEffect(() => {
    if (detailspage) {
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case component unmounts
    };
  }, [detailspage]);



  return (
    <>
          {detailspage === true ? (
          <div className="detailsshow">
            {showedAProductDetails.map((OneElement, index) => {
              return (
                <div className="OneProductDetail" key={index}>
                  <div className="leftsideimageshow">
                    <div className="imagebigbox" onMouseMove={handleMouseMove} onMouseLeave={() => document.querySelector('.imagebigbox img').style.transform = 'scale(1)'}>
                      <img src={showedImageOnclickOfProduct} alt="" />
                    </div>
                    <div className="sampleimages">
                      {OneElement.images.map((OneImage, index) => {
                        return (
                          <div key={index} className="imagesamplebox" onClick={()=> setshowedImageOnclickOfProduct(OneImage)}>
                            <img src={OneImage} alt="" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="rightsidetextshowdown">
                    <h2>{OneElement.title}</h2>
                    <h3>{OneElement.category}</h3>
                    <div className="ratingEachProduct">
                      {renderStars(OneElement.rating)}
                    </div>
                    <h3>description</h3>
                    <p>{OneElement.description}</p>
                    <h2>{OneElement.price}</h2>
                    <button onClick={() => cartAddnDel(OneElement)}>Add to cart</button>
                    <div className="closebuttonInproductdetails">
                      <GoEyeClosed onClick={() => setdetailspage(false)} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
    </>
  )
}

Detailspage.propTypes={
  cartAddnDel: PropTypes.func.isRequired,
  detailspage: PropTypes.bool.isRequired,
  setdetailspage:PropTypes.func.isRequired,
  showedAProductDetails: PropTypes.array.isRequired,
  showedImageOnclickOfProduct: PropTypes.string.isRequired,
  setshowedImageOnclickOfProduct :PropTypes.func.isRequired,
  handleMouseMove:PropTypes.func.isRequired,
  renderStars: PropTypes.func.isRequired,

}

export default Detailspage;


