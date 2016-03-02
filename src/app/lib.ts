import { createStore } from 'redux';
import { rootReducer } from './reducers/root';

const store = window.devToolsExtension ?
  window.devToolsExtension()(createStore)(rootReducer) :
  createStore(rootReducer);

export const connect = (mapStateToProps = null, mapDispatchToProps = null) => {
  return component => {
    if (!component) {
      throw new Error('`component` property is mandatory.');
    }

    if (!store) {
      throw new Error('`store` property is mandatory');
    }

    if (mapDispatchToProps) {
      Object.assign(component, mapDispatchToProps(store.dispatch, component));
    }

    if (mapStateToProps) {
      Object.assign(component, mapStateToProps(store.getState(), component));

      const unsubscribe = store.subscribe(() => {
        Object.assign(component, mapStateToProps(store.getState(), component));
      });

      const componentOnDestroy = component.ngOnDestroy;
      component.ngOnDestroy = function() {
        unsubscribe();
        return componentOnDestroy.apply(component, arguments);
      };
    }
  };
};
