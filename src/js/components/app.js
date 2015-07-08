import React from 'react/addons';

export default function create(ProductList, ChartCount, ChartList) {
  class App extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      return (
        <section className="app">
          <h1>Products</h1>
          <ProductList />
          <h2>Chart count</h2>
          <ChartCount />
          <h2>Chart</h2>
          <ChartList />
        </section>
      );
    }
  }

  return App;
}
