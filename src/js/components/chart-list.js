import React from 'react/addons';

export default function create(ChartListItem, chartStore) {
  function getStateFromStores() {
    return {
      items: chartStore.getAll()
    };
  }

  class ChartList extends React.Component {

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
      let chartItems = this.state.items.map((item) => {
        return (<ChartListItem item={item}/>);
      });
      return (
        <ul>
          {chartItems}
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

  return ChartList;
}
