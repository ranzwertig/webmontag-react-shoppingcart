import {Map, Record} from 'immutable';
import {EventEmitter} from 'events';

import {CART, CHANGE_EVENT} from '../constant';

export default function create(dispatcher) {
  const Item = new Record({
    quantity: 1,
    name: null,
    link: null,
    id: null
  });
  let items = new Map();

  class CartStore extends EventEmitter {

    constructor() {
      super();
      this.emitChange = this.emitChange.bind(this);
      this.addChangeListener = this.addChangeListener.bind(this);
      this.removeChangeListener = this.removeChangeListener.bind(this);
    }

    getAll() {
      return items;
    }

    emitChange() {
      this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }

  const store = new CartStore();

  function add(id, name, link, quanitity) {
    if (items.has(id)) {
      items = items.update(id, item => item.merge({
        id: item.id,
        name: name,
        link: link,
        quantity: item.quantity + quanitity
      }));
    } else {
      const item = new Item({
        id,
        name,
        link,
        quanitity
      });
      items = items.set(id, item);
    }
    store.emitChange();
  }

  function remove(id) {
    items = items.delete(id);
    store.emitChange();
  }

  dispatcher.register(function(action) {
    switch (action.actionType) {
      case CART.CART_ITEM_ADD:
        add(action.id, action.name, action.link, action.quantity);
        break;
      case CART.CART_ITEM_REMOVE:
        remove(action.id);
        break;
      default:
    }
  });

  return store;
}
