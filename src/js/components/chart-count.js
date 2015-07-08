import React from 'react/addons';

export default function create(chartStore) {
  function getStateFromStores() {
    return {
      items: chartStore.getAll()
    };
  }

  class ChartCount extends React.Component {

    componentDidMount() {
      chartStore.addChangeListener(this._change);
    }

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    componentWillUnmount() {
      chartStore.removeChangeListener(this._change);
    }

    render() {
      return (
        <span className="chart-icon">{this.state.items.size}</span>
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

  return ChartCount;
}
