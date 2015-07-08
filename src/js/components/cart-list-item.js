import React from 'react/addons';
import {Record} from 'immutable';

export default function create(cartAction) {
  class CartListItem extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      const item = this.props.item.toJS();
      return (
        <li>
          {item.quantity}x <a href={item.link}>{item.name}</a>
          <button onClick={this.removeFromCart}>-</button>
        </li>
      );
    }

    constructor(props) {
      super(props);
      this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart() {
      const item = this.props.item.toJS();
      cartAction.remove(item.id);
    }
  }

  CartListItem.propTypes = {
    item: React.PropTypes.instanceOf(Record).isRequired
  };

  return CartListItem;
}
