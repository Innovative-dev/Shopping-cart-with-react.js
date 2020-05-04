import React from "react";

const Header = React.memo(props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h4 className="text-ingradient">Shopping cart demo</h4>
            <button className="card-btn">
                  <img src="./cart.svg"/>
                  {props.cartCount ? 
                  <div className="counter">{props.cartCount }</div>
                  : ''}
            </button>
          </div>
          </div>
    </header>
  );
});

export default Header;
