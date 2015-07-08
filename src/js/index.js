import React from 'react/addons';

import createDispacher from './service/dispatcher';

import createChartAction from './action/chart';

import createChartStore from './store/chart';

import createChartCountComponent from './components/chart-count';
import createAppComponent from './components/app';
import createProductItemComponent from './components/product-item';
import createProductListComponent from './components/product-list';
import createChartListComponent from './components/chart-list';
import createChartListItemComponent from './components/chart-list-item';

export function create() {
  const appDispatcher = createDispacher();

  const chartActions = createChartAction(appDispatcher);

  const chartStore = createChartStore(appDispatcher);

  const ChartCountComponent = createChartCountComponent(chartStore);
  const ProductItemComponent = createProductItemComponent(chartActions);
  const ProductListComponent = createProductListComponent(ProductItemComponent);
  const ChartListItemComponent = createChartListItemComponent(chartActions);
  const ChartListComponent = createChartListComponent(ChartListItemComponent, chartStore);
  const AppComponent = createAppComponent(ProductListComponent, ChartCountComponent, ChartListComponent);

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
