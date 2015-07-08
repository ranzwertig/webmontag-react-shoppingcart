import React from 'react/addons';

export default function create(cartStore) {
  function getStateFromStores() {
    return {
      items: cartStore.getAll()
    };
  }

  class CartCount extends React.Component {

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
      return (
        <span>{this.state.items.size}</span>
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

  return CartCount;
}
