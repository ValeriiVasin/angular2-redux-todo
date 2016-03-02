// connector that gets store and return connect function
export const connector = (store) => {
  if (!store) {
    throw new Error('Please provide `store` to connector.');
  }

  const _connect = ({ component, mapStateToProps, mapDispatchToProps }) => {
    console.log('connect!', component);
    if (!component) {
      throw new Error('`component` property is mandatory.');
    }

    if (mapDispatchToProps) {
      console.log('has dispatch', component);
      Object.assign(component, mapDispatchToProps(store.dispatch, component));
    }

    if (mapStateToProps) {
      Object.assign(component, mapStateToProps(store.getState(), component));

      const unsubscribe = store.subscribe(() => {
        Object.assign(component, mapStateToProps(store.getState(), component));
      });

      const componentOnDestroy = component.ngOnDestroy;
      component.ngOnDestroy = function() {
        console.log('destroy', component);
        unsubscribe();
        return componentOnDestroy.apply(component, arguments);
      };
    }
  };

  return (mapStateToProps = null, mapDispatchToProps = null) => {
    return component => {
      console.log('component bootstrap', component);
      const ngOnInit = component.ngOnInit;

      // emulate ngOnInit
      // TODO: check that it applies initial state
      if (!ngOnInit) {
        setTimeout(() => _connect({ component, mapStateToProps, mapDispatchToProps }), 0);
        return;
      }

      component.ngOnInit = function() {
        ngOnInit.apply(this, arguments);
        _connect({ component, mapStateToProps, mapDispatchToProps });
      };
    };
  }
};
