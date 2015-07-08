import React from 'react/addons';

export default function create(ProductList, CartCount, CartList) {
  class App extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      return (
        <section className="app">
          <h1>Products</h1>
          <ProductList />
          <h2>Cart count</h2>
          <CartCount />
          <h2>Cart</h2>
          <CartList />
        </section>
      );
    }
  }

  return App;
}
