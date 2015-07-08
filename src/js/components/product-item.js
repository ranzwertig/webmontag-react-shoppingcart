import React from 'react/addons';

export default function create(chartAction) {
  class ProductItem extends React.Component {

    shouldComponentUpdate() {
      return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
      return (
        <li>
          {this.props.id} – <a href={this.props.link}>{this.props.name}</a>
          <button onClick={this.addToChart}>+</button>
        </li>
      );
    }

    constructor(props) {
      super(props);
      this.addToChart = this.addToChart.bind(this);
    }

    addToChart() {
      chartAction.add(
        this.props.id,
        this.props.name,
        this.props.link
      );
    }
  }

  ProductItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.number.isRequired
  };

  return ProductItem;
}
