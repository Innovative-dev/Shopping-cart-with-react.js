import React from "react";

const OrderSummary = React.memo(props => {
    const { cartData,totalPrice, deliveryCharge,grandTotalPrice} = props;
  return (
    <div className="order-summary">
    <h4>Order Summary</h4>
    <div className="wrapper">
      <div className="data">
        <h5>
          Total {cartData.length ? cartData.length : 0} product
        </h5>
      </div>
      <div className="data">
        <h5>Product Total</h5>
        <h5>{totalPrice}</h5>
      </div>
      <div className="data">
        <h5>Delivery</h5>
        <h5>{deliveryCharge ? deliveryCharge : "Free"}</h5>
      </div>
    </div>
    <div className="data">
      <h5 className="text-ingradient">Total</h5>
      <h5 className="text-ingradient">{grandTotalPrice}</h5>
    </div>

    <button className="btn-primary">CHECKOUT</button>
  </div>
  );
});

export default OrderSummary;
