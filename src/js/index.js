import React from 'react/addons';

import createDispacher from './service/dispatcher';

import createCartAction from './action/cart';

import createCartStore from './store/cart';

import createCartCountComponent from './components/cart-count';
import createAppComponent from './components/app';
import createProductItemComponent from './components/product-item';
import createProductListComponent from './components/product-list';
import createCartListComponent from './components/cart-list';
import createCartListItemComponent from './components/cart-list-item';

export function create() {
  const appDispatcher = createDispacher();

  const cartActions = createCartAction(appDispatcher);

  const cartStore = createCartStore(appDispatcher);

  const CartCountComponent = createCartCountComponent(cartStore);
  const ProductItemComponent = createProductItemComponent(cartActions);
  const ProductListComponent = createProductListComponent(ProductItemComponent);
  const CartListItemComponent = createCartListItemComponent(cartActions);
  const CartListComponent = createCartListComponent(CartListItemComponent, cartStore);
  const AppComponent = createAppComponent(ProductListComponent, CartCountComponent, CartListComponent);

  function render(element) {
    const appElement = React.createElement(AppComponent);

    if (element) {
      React.render(appElement, element);
    }

    return React.renderToString(appElement);
  }

  return {
    render
  };
}
