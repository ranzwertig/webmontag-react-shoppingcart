import React from 'react/addons';
import {Record} from 'immutable';

export default function create(chartAction) {
  class ChartListItem extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      const item = this.props.item.toJS();
      return (
        <li>
          {item.quantity}x <a href={item.link}>{item.name}</a>
          <button onClick={this.removeFromChart}>-</button>
        </li>
      );
    }

    constructor(props) {
      super(props);
      this.removeFromChart = this.removeFromChart.bind(this);
    }

    removeFromChart() {
      const item = this.props.item.toJS();
      chartAction.remove(item.id);
    }
  }

  ChartListItem.propTypes = {
    item: React.PropTypes.instanceOf(Record).isRequired
  };

  return ChartListItem;
}
