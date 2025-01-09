function ProductinCheckout({Item}) {
  return (
    <div className="producttoplaced">
      <div className="leftdetail">
        <img
          src={Item.thumbnail}
          alt=""
        />
        <div className="detailtab1">
          <h3>{Item.title}</h3>
          <h5>{Item.quantity}</h5>
        </div>
      </div>
      <div className="rightdetail">
        <h2>{Item.price*Item.quantity}</h2>
        <h4>{Item.price}</h4>
      </div>
    </div>
  )
}

export default ProductinCheckout