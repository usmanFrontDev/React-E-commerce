import React, { useEffect, useState } from "react";

function AdminOrdersPanel({total}) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://react-e-commerce-app-974e0-default-rtdb.firebaseio.com/Order_From_E-commerce.json"
        );
        const data = await response.json();

        // Convert object into an array (Firebase returns data in an object structure)
        const ordersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Filter orders placed today (ensure orders have a 'date' field)
        const todayOrders = ordersArray.filter(order => {
          if (order.date) {
            const orderDate = new Date(order.date).toISOString().split('T')[0];
            return orderDate === today;
          }
          return false; // Skip orders without a valid date
        });

        setOrders(todayOrders);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(orders)

  return (
    <div>
      <h1>Today's Orders</h1>
      {orders.length === 0 ? (
        <p>No orders placed today.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>Order ID: {order.id}</h3>
              <p>Total: {order.Delivery_Details.total}</p>
              <h4>Delivery Details:</h4>
              <p>Name: {order.Delivery_Details.name}</p>
              <p>Email: {order.Delivery_Details.email}</p>
              <p>Address: {order.Delivery_Details.Adress}</p>
              <h4>Ordered Products:</h4>
              <ul>
                {order.Order_Details.map((product, index) => (
                  <li key={index}>
                    {product.title} - Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminOrdersPanel;
