import React from 'react/addons';

export default function create(CartListItem, cartStore) {
  function getStateFromStores() {
    return {
      items: cartStore.getAll()
    };
  }

  class CartList extends React.Component {

    componentDidMount() {
      cartStore.addChangeListener(this._change);
    }

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    componentWillUnmount() {
      cartStore.removeChangeListener(this._change);
    }

    render() {
      let cartItems = this.state.items.map((item) => {
        return (<CartListItem item={item}/>);
      });
      return (
        <ul>
          {cartItems}
        </ul>
      );
    }

    constructor(props) {
      super(props);
      this.state = getStateFromStores();
      this._change = this._change.bind(this);
    }

    _change() {
      this.setState(getStateFromStores());
    }
  }

  return CartList;
}
