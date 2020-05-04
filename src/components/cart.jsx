import React from "react";

const Cart = React.memo(props => {
  const { cartData,deleteCartItem,removeQty,addQty } = props;
  return (
    <div className="cart-list">
    {cartData && cartData.length ? (
      <div>
        {cartData.map((item, index) => (
          <div className="item" key={item.id}>
            <div className="img-wrapper">
              <img className="p-img" src={item.image} />
            </div>
            <div className="content">
              <h6>{item.name}</h6>
              <div className="data">
                <small>${item.price}</small>
                <small className="muted">
                  <span> Quantity: </span> {item.qty}
                </small>
              </div>
            </div>
            <div className="action">
                <div className="increment-btn">
                  <button
                    onClick={() => removeQty(item.id, index)}
                  >
                    &#45;
                  </button>
                  <div>{item.qty}</div>
                  <button onClick={() => addQty(item.id)}>
                    &#43;
                  </button>
                </div>
              <button className="delete-btn" onClick={()=> deleteCartItem(index)}>
                <img className="icon" src="./delete.svg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      ""
    )}
  </div>
  );
});

export default Cart;
