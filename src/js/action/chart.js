import {CHART} from '../constant';

export default function create(dispatcher) {
  function add(id, name, link, quantity = 1) {
    dispatcher.dispatch({
      actionType: CHART.CHART_ITEM_ADD,
      id,
      name,
      quantity
    });
  }

  function remove(id) {
    dispatcher.dispatch({
      actionType: CHART.CHART_ITEM_REMOVE,
      id
    });
  }

  return {
    add,
    remove
  };
}
