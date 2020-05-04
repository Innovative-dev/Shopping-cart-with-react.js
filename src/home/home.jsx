import React from "react";
import Header from "../components/header";
import Product from "../components/product";
import Cart from "../components/cart";
import OrderSummary from "../components/order-summary";
import ProductData from "../constant/constant";
class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductData,
      cartData: [],
      totalPrice: 0,
      deliveryCharge: 0,
      // grandTotalPrice: 0,
    };
    this.deleteCartItem = this.deleteCartItem.bind(this);
    this.addQty = this.addQty.bind(this);
    this.removeQty = this.removeQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {}

  addToCart(product) {
    if (product.inCart) {
      this.productOnRemoveCart(product.id);
    } else {
      if (this.state.cartData && this.state.cartData.length) {
        this.state.cartData.map((item) => {
          if (item.id !== product.id) {
            this.setState({ cartData: [...this.state.cartData, product] }, () =>
              this.productChangeOnAddCart(product.id)
            );
          }
        });
      } else {
        this.setState({ cartData: [...this.state.cartData, product] }, () =>
          this.productChangeOnAddCart(product.id)
        );
      }
    }
  }
  productChangeOnAddCart(id) {
    this.setState(
      {
        products: this.state.products.filter((item) => {
          if (item.id == id) {
            item.inCart = true;
          }
          return item;
        }),
      },
      this.calculateCartValue()
    );
  }

  productOnRemoveCart(id) {
    this.setState(
      {
        cartData: this.state.cartData.filter((item) => {
          return item.id !== id;
        }),
      },
      this.calculateCartValue()
    );

    this.setState({
      products: this.state.products.filter((item) => {
        if (item.id == id) {
          item.inCart = false;
        }
        return item;
      }),
    });
  }

  addQty(id) {
    const cartData = [...this.state.cartData];
    let pIndex = cartData.findIndex((item) => item.id == id);
    cartData[pIndex].qty = cartData[pIndex].qty + 1;
    this.setState({ cartData: cartData }, () => this.calculateCartValue());
  }
  removeQty(id) {
    const cartData = [...this.state.cartData];
    let pIndex = cartData.findIndex((item) => item.id == id);

    if (cartData[pIndex].qty > 1) {
      cartData[pIndex].qty = cartData[pIndex].qty - 1;
    } else {
      cartData.splice(pIndex, 1);
      this.setState({
        products: this.state.products.filter((item) => {
          if (item.id == id) {
            item.inCart = false;
          }
          return item;
        }),
      });
    }
    this.setState({ cartData: cartData }, () => this.calculateCartValue());
  }
  deleteCartItem(index) {
    const cartData = [...this.state.cartData];
    cartData.splice(index, 1);
    this.setState({ cartData: cartData }, () => this.calculateCartValue());
  }

  calculateCartValue() {
    let total = 0;
    let cartData = this.state.cartData;
    if (cartData && cartData.length) {
      cartData.forEach((item) => {
        let sum = item.price * item.qty;
        total = total + sum;
      });
      this.setState({ totalPrice: total });
    } else {
      this.setState({ totalPrice: 0 });
    }
  }

  render() {
    const { products, cartData, totalPrice, deliveryCharge } = this.state;

    const grandTotalPrice = totalPrice + deliveryCharge;

    return (
      <div>
        <Header cartCount={cartData.length} />
        <main className="main-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Product 
                  products= {products}
                  addToCart={this.addToCart}
                />
              </div>
              <div className="col-md-4">
                <Cart
                  cartData={cartData}
                  addQty={this.addQty}
                  removeQty={this.removeQty}
                  deleteCartItem={this.deleteCartItem}
                />
                <OrderSummary
                  cartData={cartData}
                  totalPrice={totalPrice}
                  deliveryCharge={deliveryCharge}
                  grandTotalPrice={grandTotalPrice}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default EditProfile;
