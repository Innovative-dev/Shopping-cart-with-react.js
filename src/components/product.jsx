import React from "react";

const Product = React.memo((props) => {

  const {products,addToCart} = props;
  return (
    <section>
      {products && products.length ? (
        <div className="product-list row">
          {products.map((item, index) => (
            <div key={index} className="product-item col-md-4">
              <div className="wrapper">
                <img className="p-img" src={item.image} />
                <h5>{item.name}</h5>
                <small>{item.category}</small>
                <div className="data">
                  <div>
                    <small>${item.price}</small> &nbsp;&nbsp;
                    <small className="underline">${item.mrp}</small>
                  </div>
                  {item.inCart ? (
                    <button
                      className="btn-secondary"
                      onClick={() => addToCart(item)}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="btn-primary"
                      onClick={() => addToCart(item)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data-found-div">
          <h3>No Data Found</h3>
        </div>
      )}
    </section>
  );
});

export default Product;
