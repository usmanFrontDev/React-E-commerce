// import React, { useState } from 'react';

// function CheckOutPage({ calculateSubtotal }) {
//   const [user, setUser] = useState({}); // Initialize user state
//   const subtotal = calculateSubtotal(); // Assuming this calculates the subtotal

//   const handleForm = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value })); // Update user state with form input
//   };

//   const send = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     const order = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         subtotal,
//         user, // Include user details in the request
//       }),
//     };

// if(subtotal === 0){
//   alert('select the items in the cart')
// }
// else{
//   try {
//     const response = await fetch(
//       'https://react-e-commerce-app-974e0-default-rtdb.firebaseio.com/Order_From_E-commerce.json',
//       order
//     );

//     if (response.ok) {
//       alert('Order Placed Successfully');
//       setUser({}); // Reset user state to blank after successful order
//     } else {
//       alert('Failed to Place Order');
//     }
//   } catch (error) {
//     alert('An error occurred while placing the order');
//     console.error(error);
//   }

// }
//   };

//   return (
//     <div className="checkOutMain">
//       <h2>Subtotal: {subtotal}</h2>

//       {/* Form input fields */}
//       <input
//         type="text"
//         name="firstName"
//         placeholder="First Name"
//         value={user.firstName || ''} // Ensure input value reflects state
//         onChange={handleForm}
//       />
//       <input
//         type="text"
//         name="lastName"
//         placeholder="Last Name"
//         value={user.lastName || ''} // Ensure input value reflects state
//         onChange={handleForm}
//       />

//       <button type="submit" onClick={send}>
//         Punch Order
//       </button>
//     </div>
//   );
// }

// export default CheckOutPage;

import { useState } from "react";
import ProductinCheckout from "./ProductinCheckout";

function CheckOutPage({ total,  productsInCart, }) {


  const [Delivery_Details, setDelivery_Details] = useState({}); // Initialize user state

  const handleForm = (e) => {
    const { name, value } = e.target;
    setDelivery_Details((prev) => ({ ...prev, [name]: value })); // Update user state with form input
  };

  // const Order_details = (e)=>{

  // }

  const send = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const order = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Order_Details : productsInCart,
        Delivery_Details: {...Delivery_Details, total},
        date: new Date().toISOString(), 
      }),
    };


if(total === 30){
  alert('select the items in the cart')
}
else{
  try {
    const response = await fetch(
      'https://react-e-commerce-app-974e0-default-rtdb.firebaseio.com/Order_From_E-commerce.json',
      order
    );

    if (response.ok) {
      alert('Order Placed Successfully');
      setDelivery_Details({}); // Reset user state to blank after successful order
    } else {
      alert('Failed to Place Order');
    }
  } catch (error) {
    alert('An error occurred while placing the order');
    console.error(error);
  }

}
  };







  return (
    <div className="checkoutmain">
      <div className="checkoutleftside">
        <div className="upperhead">
          <h3>Total {} Products</h3>
          <h2>Total Amount</h2>
          <h3>{total.toFixed(2)}</h3>
        </div>
        <div className="productitems">
         
{
productsInCart.length === 0 ?
<h1>There is not products for checkout</h1>:
productsInCart.map((Item, index)=> <ProductinCheckout key={index} Item={Item}/>)
}


        </div>
      </div>
      <div className="checkoutightside">
        <form action="submit">
          <h2>Shipping Information</h2>
          <div className="payformemail">
            <label htmlFor="email">Email</label>
            <input
             type="email" 
             name="email" 
             value={Delivery_Details.email || ''} 
             onChange={handleForm}
             />
          </div>
          <h2>Shipping adress</h2>
          <div className="payformname">
            <label htmlFor="name">Name</label>
            <input 
             type="name" 
             name="name" 
             value={Delivery_Details.name || ''} 
             onChange={handleForm}
            />
          </div>
          <div className="payformadress">
            <label htmlFor="adress">Complete Adress</label>
            <textarea cols="50" rows="10"
             name="Adress" 
             value={Delivery_Details.Adress || ''} 
             onChange={handleForm}
            />
          </div>
          <button type="submit" onClick={send}>Place Delivery</button>
        </form>
      </div>
    </div>
  );
}

export default CheckOutPage;
