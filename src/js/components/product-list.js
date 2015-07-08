import React from 'react/addons';

export default function create(ProductItem) {
  class ProductList extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      let productItems = this.state.products.map((product) => {
        return (<ProductItem {...product}/>);
      });

      return (
        <ul>
          {productItems}
        </ul>
      );
    }

    constructor(props) {
      super(props);
      const initialProducts = [];
      [1, 2, 3, 4, 5].forEach(function(id) {
        initialProducts.push({
          id: id,
          name: 'Product ' + id,
          link: '/product/' + id
        });
      });
      this.state = {
        products: initialProducts
      };
    }
  }

  return ProductList;
}
